import { CreateStarkBankBillet } from './dto/create-starkbank-billet.dto';

export class MockBilletBuilder {
  static billet: any;

  static buildStarkBankBilletResult() {
    this.billet = {
      id: '12345',
      amount: 5000,
      taxId: '12345678901',
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
    this.billet = {
      line: '123454',
      barCode: '1234556',
      receiverIdentity: '12345678901',
      description: "I'm a mocked billet",
      amountInCents: 5000,
      tags: '',
      scheduledDate: '2020-04-25',
    };

    return this;
  }

  static buildCreateStarkBankBilletDto() {
    this.billet = new CreateStarkBankBillet(this.buildCreateBilletDto().billet);
    return this;
  }

  static buildBillet() {
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
