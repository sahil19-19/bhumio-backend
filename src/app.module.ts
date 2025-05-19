import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PosterModule } from './poster/poster.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PosterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
