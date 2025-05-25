import { v2 as cloudinary } from "cloudinary";
import * as dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: String(process.env.CLOUDINARY_CLOUD_NAME),
    api_key: String(process.env.CLOUDINARY_API_KEY),
    api_secret: String(process.env.CLOUDINARY_API_SECRET),
})

export const Cloudinary = {
  upload: async (file: string) => 
    await cloudinary.uploader.upload(file, {resource_type : 'auto'}),

  createPosterUrl: (publicId: string, message: string) =>
    cloudinary.url(publicId, {
      transformation: [
        { width: 600, crop: 'scale' },
        {
          overlay: {
            font_family: 'Arial',
            font_size: 40,
            text: message,
          },
          gravity: 'south',
          y: 20,
        },
      ],
    }),
};
