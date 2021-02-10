import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

export default function NavContent(props) {
    const { isDarkMode } = useContext(ThemeContext)

    const styles = {
        backgroundColor: isDarkMode ? '#3F51B5' : 'white',
        height: '100vh',
        width: '100vw'
    }
    return (
        <div style={styles} >
            {props.children}
        </div >
    )
}
