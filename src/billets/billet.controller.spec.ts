import { Test } from '@nestjs/testing';
import { BilletController } from './billet.controller';
import { CreateBillet } from './dto/create-billet.dto';
import { Billet } from './entities/billet';
import { IBillet } from './interfaces/Billet';
import { BilletService } from './services/billet.service';
import { MockBilletBuilder } from './mock.billet.builder';

class MockBilletService extends BilletService {
  async create(): Promise<Billet> {
    const mockBilletPayment: IBillet =
      MockBilletBuilder.buildBillet().getBillet();

    return new Billet(mockBilletPayment);
  }
}

describe('BilletController', () => {
  let billetController: BilletController;
  let billetService: BilletService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [BilletController],
      providers: [{ provide: 'BilletService', useClass: MockBilletService }],
    }).compile();

    billetController = app.get<BilletController>(BilletController);
    billetService = app.get<BilletService>('BilletService');
  });

  describe('#create', () => {
    it('Should return a billet when create is successful', async () => {
      jest.useFakeTimers({ now: new Date('2020-04-24T01:33:40.611174+00:00') });
      jest.spyOn(billetService, 'create');

      const mockedBilletInput: CreateBillet =
        MockBilletBuilder.buildCreateBilletDto().getBillet();

      const result = await billetController.create(mockedBilletInput);

      expect(result).toBeInstanceOf(Billet);
      expect(billetService.create).toHaveBeenCalledWith(mockedBilletInput);

      jest.useRealTimers();
    });
  });
});