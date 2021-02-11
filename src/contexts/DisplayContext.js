import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const DisplayContext = createContext()

export function DisplayProvider(props) {
    const [isSignIn, toggleIsSignIn] = useToggleState(true)

    return (
        <DisplayContext.Provider value={{ isSignIn, toggleIsSignIn }}>
            {props.children}
        </DisplayContext.Provider>
    )
}