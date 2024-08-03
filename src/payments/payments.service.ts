import { Injectable } from '@nestjs/common';
import { CreatePaymentInvoiceDto } from './dto/create-payment-pix.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { StarkbankService } from 'src/starkbank/starkbank.service';

@Injectable()
export class PaymentsService {
  constructor(private starkBankService: StarkbankService) {}

  create({ data, method }: { data: CreatePaymentInvoiceDto; method: string }) {
    try {
      console.log(data);
      if (method === 'pix') {
        return this.starkBankService.createInvoicePix(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    console.log(updatePaymentDto);
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
