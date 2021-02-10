import React, { useContext } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { DisplayContext } from './contexts/DisplayContext'

export default function Display() {
    const { isLogin } = useContext(DisplayContext)
    return (
        <div>
            <SignUpForm />
        </div>
    )
}