import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePosterDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}
