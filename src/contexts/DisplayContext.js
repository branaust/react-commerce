import React, { createContext, useState } from 'react'
import useToggleState from '../hooks/useToggleState'

export const DisplayContext = createContext()

export function DisplayProvider(props) {
    const [open, toggleOpen] = useToggleState(false)
    const [selectedImg, setSelectedImg] = useState(null)

    const value = {
        open,
        toggleOpen,
        selectedImg,
        setSelectedImg
    }

    return (
        <DisplayContext.Provider value={value}>
            {props.children}
        </DisplayContext.Provider>
    )
}