const Cart=require('../models/cart-model')
const uploadtocloundinary=require('../utils/cloudinary')
const User=require('../models/user-model');
// const { default: persistCombineReducers } = require('redux-persist/es/persistCombineReducers');

// "id": 4,
// "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
// "title": "Mens Casual Slim Fit",
// "price": 3198,
// "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
// "rate": 2.1,
// "quantity": 1

const addToCart=async(req,res)=>{
   try {
    const userId=req.userInfo.userId;
    const user=await User.findOne({_id: userId});

    if(!user){
        return res.status(400).json({
            success: false,
            message: "No user found"
        })
    }

    const {id, title, price, description, rate, quantity, category}=req.body;

    const image = req.body.image || (req.file ? req.file.path : null); 

    if(!id || !image){
        return res.status(400).json({
            success: false,
            message:"Item details are required"
        })
    }

    //upload to cloudinary and generating link
    const cloudinaryUrl=await uploadtocloundinary(req.file.path)

    if(!cloudinaryUrl){
        return res.status(400).json({
            success: false,
            message:"file uploading to cloudinary failed"
        })
    }

    const products={
        id,
        image: cloudinaryUrl,
        title,
        price,
        description,
        rate,
        quantity,
        category

    }

    // check if cart is already present of the current user
    const userCart = await Cart.findOne({ userId });
    console.log("user cart=>",userCart)

    if(!userCart){
        await Cart.create({
            userId,
            cartProducts: [products]
        })
    }
    else{

        //if existing product is already present
        const exisitingProduct=userCart.cartProducts.find(item=> item.id===id);
        console.log("exisitng product=>",userCart.cartProducts)

        if(!exisitingProduct){
            userCart.cartProducts.push(products);
            await userCart.save();
        }
        else{
            exisitingProduct.quantity+=quantity
            await userCart.save();
        }
    }

    return res.status(200).json({
        success: true,
        message: "Cart updated successfully",
    })


    
   } catch (error) {
    console.log("Failed to add item to cart=>", error);
    return res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
   }
}

module.exports={addToCart}