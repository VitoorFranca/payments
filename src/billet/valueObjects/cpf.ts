export class CPF {
  data: string;

  constructor(cpf: string) {
    if (!this.validate(cpf)) {
      throw new Error('Invalid CPF');
    }

    this.data = cpf;
  }

  private validate(cpf: string): boolean {
    return true;
  }
}
