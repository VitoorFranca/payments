import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentInvoiceDto } from './create-payment-invoice.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentInvoiceDto) {}
