import React, { useContext, useState, useEffect } from 'react'
import { db } from '../firebase'

export const UserContext = React.createContext()

export function useDB() {
    return useContext(UserContext)
}


export function UserProvider(props) {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        db.collection('users')
            .get()
            .then(snapshot => {
                const users = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    users.push(data)
                })
                setUsers(users)
                console.log('Running Once?')
            })
            .catch(error => console.log(error))
    }, [])

    const value = {
        users
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}