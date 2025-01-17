import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import ShowMore from './pages/showMore/ShowMore'
import VerticalCards from './components/vertical_cards/VerticalCards'


function App() {
  return (
   <>
   <Home/>
   <Register/>
   <ShowMore/>
   {/* <VerticalCards/> */}
   </>
  )
}

export default App
