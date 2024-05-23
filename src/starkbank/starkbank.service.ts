import { Inject, Injectable } from '@nestjs/common';
import * as starkbank from 'starkbank';
import { StarkbankConfig } from './interfaces/starkbank.config';
import { STARKBANK_MODULE_CONFIG } from './constants/startkbank';

@Injectable()
export class StarkbankService {
  private starkbank = { user: {} };
  constructor(
    @Inject(STARKBANK_MODULE_CONFIG)
    private starkbankConfig: StarkbankConfig,
  ) {
    this.starkbank.user = new starkbank.Project(this.starkbankConfig);
  }

  async createInvoice(dto: {
    amount: number;
    taxId: string;
    name: string;
    orderId: string;
  }) {
    return starkbank.invoice.create([dto as any]);
  }
}
