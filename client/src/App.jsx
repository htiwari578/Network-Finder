import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/Home'


const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/login' element = {<Login />} />
    </Routes>
  )


}
export default App
