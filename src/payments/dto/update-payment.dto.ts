import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentInvoiceDto } from './create-payment-pix.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentInvoiceDto) {}
