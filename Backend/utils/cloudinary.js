import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`
})


const uploadOnCloudinary = async(localFilePath) =>{
    if(!localFilePath) return null

    const response = await cloudinary.uploader.upload(
        localFilePath,
        {
            resource_type:'auto'
        })
        .catch(err =>{
            console.log(err);
        })
    
    fs.unlinkSync(localFilePath);
    return response;
}

const deleteFromCloudinary = async function(filePath=''){
    if(!filePath) return false;
    filePath = filePath.split('/').slice(-1)[0].split('.')[0];

    await cloudinary.uploader.destroy(filePath)
    .catch(err=>{
        console.log('error in deleteFromCloudinary in Cloudinary.js - ',err)
        return;
    })

}

export{
    uploadOnCloudinary,
    deleteFromCloudinary,
}