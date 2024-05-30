import { BilletStatus } from '../enums/billet-status';
import { CNPJ } from '../valueObjects/cnpj';
import { CPF } from '../valueObjects/cpf';

export interface IBillet {
  id: string;
  receiverIdentity: CNPJ | CPF;
  description: string;
  line: string;
  barCode: string;
  createdAt: string;
  fee: number;
  status: BilletStatus;
  amountInCents?: number;
  scheduled?: string;
  tags?: string[];
  transactionIds?: string[];
}
