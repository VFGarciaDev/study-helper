/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect, createContext, useContext, ReactNode } from "react"
import GlobalStyles from '@/styles/globals'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import darkTheme from '@/styles/dark'
import lightTheme from '@/styles/light'

type Theme = "dark" | "light"

type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "dark",
    setTheme: () => null,
}

const ThemeContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    storageKey = "theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => {
            if (typeof window !== "undefined") {
                // Acessa o localStorage no lado do cliente
                return (localStorage.getItem(storageKey) as Theme) || defaultTheme
            } else {
                // Retorna o tema padrão no lado do servidor
                return defaultTheme
            }
        }
    )

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Atualiza o localStorage sempre que o tema mudar
            localStorage.setItem(storageKey, theme)
        }
    }, [theme, storageKey])

    const value = {
        theme,
        setTheme: (theme: Theme) => setTheme(theme)
    }

    return (
        <ThemeContext.Provider {...props} value={value}>
            <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                <GlobalStyles />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}