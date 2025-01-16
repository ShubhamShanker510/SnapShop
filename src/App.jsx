import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import ShowMore from './pages/showMore/ShowMore'


function App() {
  return (
   <>
   <Home/>
   <Register/>
   <ShowMore/>
   </>
  )
}

export default App
