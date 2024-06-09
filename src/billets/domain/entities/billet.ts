import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IBillet } from '../interfaces/Billet';
import { Document } from '../valueObjects/document';

export class Billet {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  receiverIdentity: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  line: string;

  @IsString()
  barCode: string;

  @IsDateString()
  scheduled: string;

  tags: string;

  transactionIds: string[];

  status: string;

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
    this.receiverIdentity = new Document(
      receiverIdentity,
    ).getFormattedDocument();
    this.scheduled = scheduled;
    this.status = status;
    this.tags = tags;
    this.transactionIds = transactionIds;
  }

  private getAmount(amountInCents: number) {
    return Math.ceil(amountInCents / 100);
  }
}
