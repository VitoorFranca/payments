export interface IBillet {
  id: string;
  receiverIdentity: string;
  description: string;
  line?: string;
  barCode?: string;
  createdAt: string;
  fee?: number;
  status?: string;
  amountInCents?: number;
  scheduled?: string;
  tags?: string;
  transactionIds?: string[];
}
