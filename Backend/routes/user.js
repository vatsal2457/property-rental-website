import { Router } from 'express'
import {handleSignupUser, handleLoginUser, handleLogoutUser, handleAddProperty} from '../controllers/Users.controller.js'
import { verifyJWT } from '../middlewares/verifyJWT.js';
import { upload } from '../middlewares/multer.js';

const  UserRouter = Router();

UserRouter.route('/signup') // http://localhost:3000/api/user/signup
.post(handleSignupUser)

UserRouter.route('/login') // http://localhost:3000/api/user/login
.post(handleLoginUser)

UserRouter.route('/logout')
.get(handleLogoutUser)

// Protected Routes

UserRouter.route('/addProperty')
.get(verifyJWT, (req,res)=>{
    res.status(200).json({message:'SUCCESS'})
})
.post(
    verifyJWT,
    upload.fields([{
        name:'propertyImage',
        maxCount:5
    }]),
    handleAddProperty

)





UserRouter.route('/yourProperties')
.get(verifyJWT,(req,res)=>{
    res.status(200).json({message:'SUCCESS'})
})



export{
    UserRouter
}




