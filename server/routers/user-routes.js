const express=require('express');
const { registerUser, loginUser, updateUserPassword } = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth-middleware');
const router=express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser)
router.patch('/update-password',authMiddleware,updateUserPassword)

module.exports=router;
