import { Module } from '@nestjs/common';
import { BilletController } from './billet.controller';

@Module({
  controllers: [BilletController],
  providers: [],
})
export class BilletModule {}
