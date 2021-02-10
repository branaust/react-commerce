import React, { useContext } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { DisplayContext } from '../contexts/DisplayContext'

export default function Display() {
    const { isSignIn } = useContext(DisplayContext)
    return (
        <div>
            {isSignIn ? <SignUpForm /> : <SignInForm />}
        </div>
    )
}