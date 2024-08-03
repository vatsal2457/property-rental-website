const express =  require('express')
const { Router } =  require('express')
const  UserRouter=  Router()
const {handleSignupUser,handleLoginUser} =  require('../controllers/Users.js')



UserRouter.route('/signup')
.post(handleSignupUser)

UserRouter.route('/login')
.post(handleLoginUser)


module.exports = {
    UserRouter
}




