import { Module } from '@nestjs/common';
import { BilletController } from './billet.controller';
import { StarkbankBilletService } from './services/starkbank.billet.service';

@Module({
  controllers: [BilletController],
  providers: [{ provide: 'BilletService', useClass: StarkbankBilletService }],
})
export class BilletModule {}
