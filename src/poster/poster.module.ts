import { Module } from "@nestjs/common";
import { PosterController } from "./poster.controller";
import { PosterService } from "./poster.service";

@Module({
    controllers : [PosterController],
    providers: [PosterService],
})
export class PosterModule{}