import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CPF } from '../valueObjects/cpf';
import { CNPJ } from '../valueObjects/cnpj';
import { CreateBillet } from './create-billet.dto';

interface ICreateStarkBankBillet
  extends Omit<
    CreateBillet,
    'amountInCents' | 'receiverIdentity' | 'scheduledDate'
  > {}

export class CreateStarkBankBillet implements ICreateStarkBankBillet {
  @IsNotEmpty()
  taxId: CPF | CNPJ;

  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  line: string;

  @IsNotEmpty()
  @IsString()
  barCode: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  tags: string;

  @IsDateString()
  scheduled: string;

  constructor(createBilletDto: CreateBillet) {
    this.amount = createBilletDto.amountInCents;
    this.taxId = createBilletDto.receiverIdentity;
    this.barCode = createBilletDto.barCode;
    this.line = createBilletDto.line;
    this.description = createBilletDto.description;
    this.tags = createBilletDto.tags;
    this.scheduled = createBilletDto.scheduledDate;
  }
}
