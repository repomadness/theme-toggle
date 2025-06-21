import React from 'react'
import './styles/index.css'
import ThemeToggle from './components/theme-toggle/ThemeToggle'
import useTheme from './hooks/useTheme'

function App() {
  const { theme } = useTheme();
  return (
    <div id="app-container" className="app-container">
      <div id="title-container" className="title-container">
        <h1>repomadness theme toggle</h1>
      </div>
      <div id="theme-toggle-container" className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <div id="content-container" className="content-container">
        <p>The current theme is:</p>
        <h2 className="theme-text">✨ {theme === "dark" ? "dark vibes 🌙" : "light vibes 🌞"}</h2>
      </div>
    </div>
  )
}

export default App
