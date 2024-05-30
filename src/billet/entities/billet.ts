import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CPF } from '../valueObjects/cpf';
import { CNPJ } from '../valueObjects/cnpj';
import { BilletStatus } from '../enums/billet-status';
import { IBillet } from '../interfaces/Billet';

export class Billet {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  receiverIdentity: CPF | CNPJ;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  line: string;

  @IsString()
  barCode: string;

  @IsDateString()
  scheduled: string;

  tags: string[];

  transactionIds: string[];

  status: BilletStatus;

  @IsNumber()
  amount: number;

  @IsNumber()
  fee: number;

  @IsDateString()
  createdAt: string;

  constructor({
    id,
    amountInCents,
    barCode,
    createdAt,
    description,
    fee,
    line,
    receiverIdentity,
    scheduled,
    status,
    tags,
    transactionIds,
  }: IBillet) {
    this.id = id;
    this.amount = this.getAmount(amountInCents);
    this.barCode = barCode;
    this.createdAt = createdAt;
    this.description = description;
    this.fee = fee;
    this.line = line;
    this.receiverIdentity = receiverIdentity;
    this.scheduled = scheduled;
    this.status = status;
    this.tags = tags;
    this.transactionIds = transactionIds;
  }

  private getAmount(amountInCents: number) {
    return Math.ceil(amountInCents / 100);
  }
}
