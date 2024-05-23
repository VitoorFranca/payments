import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PaymentsService } from './payments.service';
import { CreatePaymentInvoiceDto } from './dto/create-payment-invoice.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('invoice')
  create(@Body() createPaymentDto: CreatePaymentInvoiceDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get('invoice')
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get('invoice/:id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Patch('invoice/:id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(+id, updatePaymentDto);
  }

  @Delete('invoice/:id')
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(+id);
  }
}
