import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home/Index.jsx'
import Login from './components/Login/Index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
