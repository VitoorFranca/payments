import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
}
