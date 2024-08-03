import { Inject, Injectable } from '@nestjs/common';
import * as starkbank from 'starkbank';
import { StarkbankConfig } from './interfaces/starkbank.config';
import { STARKBANK_MODULE_CONFIG } from './constants/startkbank';
import { CreatePaymentInvoiceDto } from 'src/payments/dto/create-payment-pix.dto';

@Injectable()
export class StarkbankService {
  private starkbank = starkbank;

  constructor(
    @Inject(STARKBANK_MODULE_CONFIG)
    private starkbankConfig: StarkbankConfig,
  ) {
    this.starkbank.user = new starkbank.Project(this.starkbankConfig);
  }

  async createInvoicePix(data: CreatePaymentInvoiceDto) {
    const response = await this.starkbank.invoice.create([
      {
        amount: data.amount,
        taxId: data.cpf,
        name: `${data.firstName} ${data.lastName}`,
        expiration: 123456789,
        fine: 2.5,
        interest: 1.3,
        // tags: ['War supply', 'Invoice #1234'],
        descriptions: [
          {
            key: 'Arya',
            value: 'Not today',
          },
        ],
        // rules: [
        //   {
        //     key: 'allowedTaxIds',
        //     value: ['012.345.678-90', '45.059.493/0001-73'],
        //   },
        // ],
      },
    ] as any);

    console.log(response);

    return response;
  }
}
