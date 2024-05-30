import { Test } from '@nestjs/testing';
import { BilletController } from './billet.controller';
import { CreateBillet } from './dto/create-billet.dto';
import { Billet } from './entities/billet';
import { IBillet } from './interfaces/Billet';
import { BilletStatus } from './enums/billet-status';
import { CPF } from './valueObjects/cpf';

describe('BilletController', () => {
  let billetController: BilletController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [BilletController],
    }).compile();

    billetController = app.get<BilletController>(BilletController);
  });

  describe('#create', () => {
    it('Should return a billet when create is successful', async () => {
      const mockedBilletInput: CreateBillet = {
        line: '123454',
        barCode: '1234556',
        receiverIdentity: new CPF('12345678901'),
        description: "I'm a mocked billet",
        amountInCents: 5000,
        tags: [],
        scheduledDate: '2020-04-24T01:33:40.611174+00:00',
      };

      const result = await billetController.create(mockedBilletInput);

      const mockBilletPayment: IBillet = {
        id: '1',
        ...mockedBilletInput,
        createdAt: '2020-04-24T01:33:40.611174+00:00',
        fee: 0,
        status: BilletStatus.created,
      };

      const expected = new Billet(mockBilletPayment);

      expect(result).toEqual(expected);
    });
  });
});
