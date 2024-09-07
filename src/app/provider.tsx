"use client"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "@/context/ThemeProvider"

export function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="theme">
            {children}
        </ThemeProvider>
    );
}