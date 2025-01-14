import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Box from './components/hover_box/Box'
import Card from './components/cards/Card'


function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Card/>
   </>
  )
}

export default App
