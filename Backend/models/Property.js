import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        default:''
    },
    phoneNo:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        required:true,
    },
    sellOrRent:{
        type:String,
        required:true,
    },
    bhkType:{
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    floor:{
        type:Number,
        required:true
    },
    expectedPrice:{
        type:Number,
    },
    expectedRent: {
        type:Number,
    },
    deposit: {
        type:Number,
    },
    ageOfProperty: {
        type:Number,
        required: true
    },
    state: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    images: [{
        type:String
    }],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }

})

const Property = mongoose.model('Property',PropertySchema) ;

export{
    Property
}