import { Module } from '@nestjs/common';
import { BilletController } from './infrastructure/billet.controller';
import { StarkbankBilletService } from './infrastructure/services/starkbank.billet.service';

@Module({
  controllers: [BilletController],
  providers: [{ provide: 'BilletService', useClass: StarkbankBilletService }],
})
export class BilletModule {}
