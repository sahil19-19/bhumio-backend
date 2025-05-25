import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PosterService } from './poster.service';
import { CreatePosterDto } from './dto/create-poster.dto';

@Controller('generate-poster')
export class PosterController {
constructor(private readonly posterService: PosterService) {} // creating an instance to use function generatePoster

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async generatePoster(
    @Body() body: CreatePosterDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.posterService.generatePoster(body.message, file);
  }
}