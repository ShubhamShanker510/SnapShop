const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/auth-middleware')
const { addToCart } = require('../controllers/cart-controller')
const upload=require('../middleware/multer-middleware')

router.post('/add-to-cart', authMiddleware, upload.single('image'), addToCart);


module.exports=router