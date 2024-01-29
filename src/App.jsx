import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import PasswordGenerator from './components/Password'
import Dummy from './components/Dummy'



// using usecallback , useref, useeffect

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <PasswordGenerator /> */}
    <Dummy />
    </>
  )
}

export default App
