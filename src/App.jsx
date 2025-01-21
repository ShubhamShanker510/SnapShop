
import './App.css'

import Home from './pages/Home/Home'

import CategoriesPage from './pages/categoriesPage/CategoriesPage'
import { BrowserRouter as Router,Routes,Route, Outlet, useParams  } from 'react-router-dom'

import Layout from './pages/layout/Layout'
import ShowMore from './pages/showMore/ShowMore'
import HeaderPage from './pages/headerPage/HeaderPage'
import Register from './pages/Register/Register'


function App() {
  return (
   <>
     <Router>
       <Routes>
         <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='categories/:id' element={<CategoriesPage/>}/>
            <Route path='products/:id' element={<ShowMore/>}/>
            <Route path='products' element={<HeaderPage/>}/>
         </Route>
            <Route path='/register' element={<Register/>}/>
       </Routes>
     </Router>
   </>
  )
}

export default App
