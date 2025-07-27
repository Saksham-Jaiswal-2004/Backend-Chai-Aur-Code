import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs' // Used for file operations, fs -> File System

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        const response = await cloudinary.v2.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        console.log("File have been successfully uploaded on Cloudinary!", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // Removes the locally saved temporary file as the upload function fails
        return null;
    }
}

export { uploadOnCloudinary }