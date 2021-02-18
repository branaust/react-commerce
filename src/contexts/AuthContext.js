import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { useHistory } from 'react-router-dom'
import useInputState from '../hooks/useInputState'

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState("")
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const [currentUserData, setCurrentUserData] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory()


    const authSignup = async (email, password) => {

        await auth.createUserWithEmailAndPassword(email, password)
            .then(async () => {
                await db.collection('users').doc(auth.currentUser.uid)
                    .set({
                        firstName: null,
                        lastName: null,
                        birthday: null,
                        email: email
                    })
                history.push('/')
                setMessage("Account Created")
                setTimeout(() => { setMessage("") }, 3500)
                setLoading(false)
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode) {
                    setError(errorMessage);
                    setLoading(false)
                }
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            e.preventDefault()
            authLogin(email, password)
            setMessage('Logged In Successfully')
            setTimeout(() => { setMessage("") }, 3500)
            // 
            setLoading(false)
        }
        catch {
            setTimeout(() => { setError('Failed to log in') }, 1000)
            console.log('failed')
        }

    }

    const authLogin = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
    }

    function authLogout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateUserEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updateUserPassword(password) {
        return currentUser.updatePassword(password)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
                db.collection('users')
                    .doc(user.uid)
                    .get()
                    .then(doc => {
                        setCurrentUserData(doc.data())
                        history.push('/')
                    })
            } else {
                setCurrentUser(null)
                setCurrentUserData(null)
            }
            setLoading(false)
        })
        return unsubscribe
    }, [history])


    const value = {
        error,
        setError,
        loading,
        setLoading,
        message,
        setMessage,
        currentUser,
        currentUserData,
        authSignup,
        authLogin,
        authLogout,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
        handleLogin,
        email,
        updateEmail,
        password,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}
