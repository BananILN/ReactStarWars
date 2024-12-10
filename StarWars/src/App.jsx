import { useState } from 'react'
import AppStarWars from './components/AppStarWars'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hi</h2>
      <AppStarWars />
    </>
  )
}

export default App
