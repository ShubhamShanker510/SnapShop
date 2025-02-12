const mongoose=require('mongoose')
// "id": 4,
// "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
// "title": "Mens Casual Slim Fit",
// "price": 3198,
// "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
// "rate": 2.1,
// "quantity": 1

const cartSchema=mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    cartProducts:[
        {
            id: {
                type: Number,
                required:true
            },
            image:{
                type: String,
                required: true
            },
            title:{
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            description:{
                type: String,
                required: true
            },
            rate:{
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            },
            category:{
                type:String,
                enum:["men's clothing","jewelery","electronics","women's clothing"],
                required: true
            }

        }
    ]

},{timestamps: true})

module.exports=mongoose.model("Cart",cartSchema);