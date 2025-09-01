import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBoard from './mainPage/colorBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorBoard></ColorBoard>
    </>
  )
}

export default App
