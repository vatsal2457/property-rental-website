import { Router } from 'express'
import {handleSignupUser, handleLoginUser} from '../controllers/Users.controller.js'

const  UserRouter = Router();

UserRouter.route('/signup') // http://localhost:3000/api/user/signup
.post(handleSignupUser)

UserRouter.route('/login') // http://localhost:3000/api/user/login
.post(handleLoginUser)


export{
    UserRouter
}




