import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'build'));
  app.setBaseViewsDir(join(__dirname, '..', 'static'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
