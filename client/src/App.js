import React from 'react'
import HomePage from './components/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
const App = ()=> {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<HomePage/>}>
      </Route>
      
    </Routes>
    </>
  )
}

export default App