import { Router } from 'express'
import {handleSignupUser, handleLoginUser, handleLogoutUser, handleAddProperty, handleUserProperty, handleDeleteProperty, handleGetProperties} from '../controllers/Users.controller.js'
import { verifyJWT } from '../middlewares/verifyJWT.js';
import { upload } from '../middlewares/multer.js';

const  UserRouter = Router();

UserRouter.route('/signup') 
.post(handleSignupUser)

UserRouter.route('/login') 
.post(handleLoginUser)

UserRouter.route('/logout')
.get(handleLogoutUser)

UserRouter.route('/getproperties')
.get(handleGetProperties)

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

UserRouter.route('/yourproperties')
.get(verifyJWT,handleUserProperty)

UserRouter.route('/yourproperties/deleteproperty')
.delete(verifyJWT, handleDeleteProperty);



export{
    UserRouter
}




