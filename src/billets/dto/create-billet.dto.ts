import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CPF } from '../valueObjects/cpf';
import { CNPJ } from '../valueObjects/cnpj';

export class CreateBillet {
  @IsNotEmpty()
  @IsString()
  line: string;

  @IsNotEmpty()
  @IsString()
  barCode: string;

  @IsNotEmpty()
  receiverIdentity: CPF | CNPJ;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  amountInCents: number;

  @IsString()
  tags?: string;

  @IsDateString()
  scheduledDate: string;
}
