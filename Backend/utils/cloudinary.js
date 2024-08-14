import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
  
    cloud_name: 'dyfmapdxz',
    api_key: '719563144224173',
    api_secret: 'O7k3W9e8AbGomsdd6wAoz8Q-DPo'

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
    .then(res=>{
        console.log('res from cloudinary - ',res)
    })
    .catch(err=>{
        console.log('error in deleteFromCloudinary in Cloudinary.js - ',err)
        return;
    })

}

export{
    uploadOnCloudinary,
    deleteFromCloudinary,
}