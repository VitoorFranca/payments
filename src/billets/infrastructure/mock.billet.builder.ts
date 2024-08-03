import { CreateBillet } from '../domain/dto/create-billet.dto';
import { CreateStarkBankBillet } from '../domain/dto/create-starkbank-billet.dto';
import { cpf, cnpj } from 'cpf-cnpj-validator';
export class MockBilletBuilder {
  static billet: any;

  static buildStarkBankBilletResult() {
    this.billet = {
      id: '12345',
      amount: 5000,
      taxId: cnpj.generate(),
      created: new Date().toISOString(),
      description: 'I am a mocked billet',
      scheduled: '',
      tags: '',
      status: '',
      transactionIds: [],
      fee: 0,
    };

    return this;
  }

  static buildCreateBilletDto() {
    this.billet = new CreateBillet(this.buildCreateBilletInput().billet);
    return this;
  }

  static buildCreateStarkBankBilletDto() {
    this.billet = new CreateStarkBankBillet(this.buildCreateBilletDto().billet);
    return this;
  }

  static buildCreateBilletInput() {
    this.billet = {
      line: '123454',
      barCode: '1234556',
      receiverIdentity: cpf.generate(),
      description: "I'm a mocked billet",
      amountInCents: 5000,
      tags: '',
      scheduledDate: '2020-04-25',
    };

    return this;
  }

  static buildCreateBilletOutput() {
    this.billet = {
      ...this.buildStarkBankBilletResult().billet,
      receiverIdentity: this.billet.taxId,
      createdAt: this.billet.created,
      amountInCents: this.billet.amount,
    };

    return this;
  }

  static getBillet() {
    return this.billet;
  }
}
