import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreatePaymentInvoiceDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;
}
