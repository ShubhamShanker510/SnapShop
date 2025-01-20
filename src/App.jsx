
import './App.css'

import Home from './pages/Home/Home'

import CategoriesPage from './pages/categoriesPage/CategoriesPage'
import { BrowserRouter as Router,Routes,Route, Outlet, useParams  } from 'react-router-dom'

import Layout from './pages/layout/Layout'
import ShowMore from './pages/showMore/ShowMore'


function App() {
  return (
   <>
     <Router>
       <Routes>
         <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='categories/:id' element={<CategoriesPage/>}/>
            <Route path='products/:id' element={<ShowMore/>}/>
         </Route>
       </Routes>
     </Router>
   </>
  )
}

export default App
