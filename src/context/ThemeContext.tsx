'use client'

import { createContext, ReactNode, useContext, useState } from "react"

const ThemeContext = createContext<any>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false)
    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}