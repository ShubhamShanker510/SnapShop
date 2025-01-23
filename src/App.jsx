
import './App.css'

import Home from './pages/Home/Home'

import CategoriesPage from './pages/categoriesPage/CategoriesPage'
import { BrowserRouter as Router,Routes,Route, Outlet, useParams  } from 'react-router-dom'

import Layout from './pages/layout/Layout'
import ShowMore from './pages/showMore/ShowMore'
import HeaderPage from './pages/headerPage/HeaderPage'
import Register from './pages/Register/Register'
import WishlistPage from './pages/wishlistPage/WishlistPage'
import CartPage from './pages/cartPage/CartPage'
import NotFound from './pages/not found/NotFound'


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
            <Route path='wishlist' element={<WishlistPage/>}/>
            <Route path='cart' element={<CartPage/>}/>
         </Route>
            <Route path='*' element={<NotFound text="Something Went Wrong...." delay={100}/>}/>
            <Route path='/register' element={<Register/>}/>
       </Routes>
     </Router>
   </>
  )
}

export default App
