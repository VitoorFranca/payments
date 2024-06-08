import { ValidationError } from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export class Document {
  data: string;

  constructor(document: string) {
    if (!this.isValid(document)) {
      const validationError = new ValidationError();
      validationError.contexts = {
        status: '400',
        errors: [{ status: 400, code: 'receiverIdentity' }],
      };
      throw validationError.contexts;
    }

    this.data = document;
  }

  getFormattedDocument(): string {
    if (this.isCPF(this.data)) return cpf.format(this.data);
    return cnpj.format(this.data);
  }

  getDocumenNumbers(): string {
    if (this.isCPF(this.data)) return cpf.strip(this.data);
    return cnpj.strip(this.data);
  }

  private isValid(document: string): boolean {
    return this.isCPF(document) || this.isCNPJ(document);
  }

  private isCPF(document: string): boolean {
    return cpf.isValid(document);
  }

  private isCNPJ(document: string): boolean {
    return cnpj.isValid(document);
  }
}
