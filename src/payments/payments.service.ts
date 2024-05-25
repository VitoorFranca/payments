import { Injectable } from '@nestjs/common';
import { CreatePaymentInvoiceDto } from './dto/create-payment-invoice.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { StarkbankService } from 'src/starkbank/starkbank.service';

@Injectable()
export class PaymentsService {
  constructor(private starkBankService: StarkbankService) {}

  create(createPaymentDto: CreatePaymentInvoiceDto) {
    try {
      console.log(createPaymentDto);
      this.starkBankService.createInvoice({});

      return 'This action adds a new payment';
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
