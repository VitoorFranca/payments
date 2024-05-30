export class CPF {
  private readonly cpf: string;

  constructor(cpf: string) {
    if (!this.validate(cpf)) {
      throw new Error('Invalid CPF');
    }

    this.cpf = cpf;
  }

  private validate(cpf: string): boolean {
    return true;
  }
}
