import { Injectable, BadRequestException } from '@nestjs/common';
import { Cloudinary } from './cloudinary';

@Injectable()
export class PosterService {
  async generatePoster(message: string, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Image file is required');
    }

    // upload image to Cloudinary
    const b64 = Buffer.from(file.buffer).toString('base64');
    const dataURI = 'data:' + file.mimetype + ';base64,' + b64;
    const uploaded = await Cloudinary.upload(dataURI);
    
    // generate transformed url
    const posterUrl = Cloudinary.createPosterUrl(uploaded.public_id, message);
    return { url: posterUrl };
    // Cloudinary.checkAPI();
  }
}
