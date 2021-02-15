import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState('false')
    const history = useHistory()


    const authSignup = async (email, password) => {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            history.push('/')
            setMessage("Account Created")
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode) {
                setError(errorMessage);
                setLoading(false)
            }
        }


    }

    function authLogin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
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
        const unsubscribe = auth.onIdTokenChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })
        return unsubscribe
    }, [history])



    const value = {
        error,
        setError,
        loading,
        setLoading,
        success,
        setSuccess,
        message,
        setMessage,
        currentUser,
        authSignup,
        authLogin,
        authLogout,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}
