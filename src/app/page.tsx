"use client"
import { useTheme } from "@/context/ThemeProvider"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main>
      <h1>HEADING</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima voluptatum vitae nulla voluptas labore iusto quasi repellendus tempore neque veniam harum obcaecati, placeat illo maxime nostrum adipisci sit eveniet?</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
    </main>
  )
}
