import { IsNotEmpty, IsNumber } from 'class-validator';
import { CPF } from '../valueObjects/cpf';
import { CNPJ } from '../valueObjects/cnpj';
import { CreateBillet } from './create-billet.dto';

export class CreateStarkBankBillet extends CreateBillet {
  @IsNotEmpty()
  taxId: CPF | CNPJ;

  @IsNumber()
  amount: number;

  constructor() {
    super();

    this.amount = this.amountInCents;
    this.taxId = this.receiverIdentity;
  }
}
