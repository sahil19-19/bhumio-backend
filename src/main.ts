import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });
  console.log('Running on port', PORT);
  await app.listen(PORT);
}
bootstrap();
