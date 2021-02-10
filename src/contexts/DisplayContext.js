import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const DisplayContext = createContext()

export function DisplayProvider(props) {
    const [isLogin, toggleIsLogin] = useToggleState(true)

    return (
        <DisplayContext.Provider value={{ isLogin, toggleIsLogin }}>
            {props.children}
        </DisplayContext.Provider>
    )
}