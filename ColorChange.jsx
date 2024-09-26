import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("red")

  const changeColor = () => {
    if (bgColor === "red") {
      setBgColor("green")
    } else if (bgColor === "green") {
      setBgColor("yellow")
    } else {
      setBgColor("red")
    }
  }

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: "100vh", 
      width: "100vw", 
      margin: 0, 
      padding: "20px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={changeColor}>
          Change Background Color
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
