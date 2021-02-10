import React, { useContext } from 'react'
import Form from './Form'
import { DisplayContext } from './contexts/DisplayContext'

export default function Display() {
    const { isLogin } = useContext(DisplayContext)
    return (
        <div>
            {isLogin ? <Form /> : <h1>HA I DID ITTTT</h1>}
        </div>
    )
}