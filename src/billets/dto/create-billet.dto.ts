import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document } from '../valueObjects/document';

export interface CreateBilletInput {
  line: string;
  barCode: string;
  receiverIdentity: string;
  description: string;
  amountInCents: number;
  tags?: string;
  scheduledDate: string;
}

export class CreateBillet {
  @IsNotEmpty()
  @IsString()
  line: string;

  @IsNotEmpty()
  @IsString()
  barCode: string;

  @IsNotEmpty()
  receiverIdentity: Document;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  amountInCents: number;

  @IsString()
  tags?: string;

  @IsDateString()
  scheduledDate: string;

  constructor({
    amountInCents,
    barCode,
    description,
    line,
    receiverIdentity,
    scheduledDate,
    tags,
  }: CreateBilletInput) {
    this.amountInCents = amountInCents;
    this.barCode = barCode;
    this.description = description;
    this.line = line;
    this.receiverIdentity = new Document(receiverIdentity);
    this.scheduledDate = scheduledDate;
    this.tags = tags;
  }
}
