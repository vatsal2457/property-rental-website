import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    }
},{timeStamp:true})

UserSchema.methods.generateToken = async function (){
    try {
        const payload = {
            name:this.name,
            id: this._id
        }
        return jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:'2d'})
    } catch (error) {
        console.log("error - ",error)
    }
}

const Users = mongoose.model('Users',UserSchema);

export{
    Users,
}
