import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { StarkbankModule } from './starkbank/startbank.module';

@Module({
  imports: [
    PaymentsModule,
    StarkbankModule.register({
      environment: process.env.STARKBANK_ENV,
      id: process.env.STARKBANK_ID,
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
