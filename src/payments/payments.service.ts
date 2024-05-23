import { Injectable } from '@nestjs/common';
import { CreatePaymentInvoiceDto } from './dto/create-payment-invoice.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { StarkbankService } from 'src/starkbank/starkbank.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaymentsService {
  constructor(private starkBankService: StarkbankService) {}

  create(createPaymentDto: CreatePaymentInvoiceDto) {
    this.starkBankService.createInvoice({
      amount: createPaymentDto.amount,
      name: `${createPaymentDto.firstName} ${createPaymentDto.lastName}`,
      taxId: createPaymentDto.cpf,
      orderId: uuidv4(),
    });

    return 'This action adds a new payment';
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
