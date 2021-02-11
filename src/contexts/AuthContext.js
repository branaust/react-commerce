import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function authSignup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
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
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])



    const value = {
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
