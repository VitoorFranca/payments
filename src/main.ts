import * as dotenv from 'dotenv';
dotenv.config({ path: process.env.DOTENV_PATH || undefined });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger);
  app.useGlobalFilters(new HttpExceptionFilter(logger));
  await app.listen(3000);
}
bootstrap();
