import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
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

const Users = mongoose.model('Users',UserSchema);

export{
    Users,
}
