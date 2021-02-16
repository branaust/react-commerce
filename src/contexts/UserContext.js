import React, { useContext, useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase'

export const UserContext = React.createContext()

export function useDB() {
    return useContext(UserContext)
}


export function UserProvider(props) {

    const [users, setUsers] = useState(null)
    const { currentUser } = useAuth("")
    const [currentUserData] = useState("")



    const value = {
        users,
        currentUserData
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}