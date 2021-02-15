import React, { useContext, useState } from 'react'
import { db } from '../firebase'

export const UserContext = React.createContext()

export function useDB() {
    return useContext(UserContext)
}

function renderUsers(doc) {
    return (
        <div>
            <li></li>
        </div>
    )
}

export function UserProvider(props) {

    const [user, setUser] = useState("")


    // db.collection('users').get().then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //         setUser(doc.data())

    //     })
    // })

    const value = {
        user
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}