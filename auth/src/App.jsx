import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singnup from './components/Singnup'
import Login from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singnup/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App