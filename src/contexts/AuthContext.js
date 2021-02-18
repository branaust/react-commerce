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
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory()

    const authSignup = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                return db.collection('users').doc(auth.currentUser.uid)
                    .set({
                        firstName: null,
                        lastName: null,
                        birthday: null,
                        email: email
                    }).then(() => {
                        history.push('/')
                        setMessage("Account Created")
                        setLoading(false)
                    })
            })

            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode) {
                    setError(errorMessage);
                    setLoading(false)
                }
            }


            )
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        try {
            setLoading(true)
            e.preventDefault()
            authLogin(email, password)
            history.push('/')
        }
        catch {
            setError('Failed to log in')
        }
        setLoading(false)
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

    const userData = (user) => {
        if (user) {
            db.collection('users')
                .doc(user.uid)
                .get()
                .then(doc => {
                    setCurrentUserData(doc.data())
                    console.log('IN USER DATA')
                })
                .catch(error => console.log(error))
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
                userData(user)
            } else {
                console.log('user logged out')
                setCurrentUser(null)
            }
            setLoading(false)
        })
        return unsubscribe
    }, [])



    const value = {
        error,
        loading,
        message,
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
