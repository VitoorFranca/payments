import { Test } from '@nestjs/testing';
import { StarkbankBilletService } from './starkbank.billet.service';
import { BilletService } from './billet.service';
import { CreateBillet } from '../dto/create-billet.dto';
import { Billet } from '../entities/billet';
import { CreateStarkBankBillet } from '../dto/create-starkbank-billet.dto';
import { boletoPayment } from 'starkbank';
import { MockBilletBuilder } from '../mock.billet.builder';

jest.mock('starkbank');

describe('BilletService', () => {
  let starkbankBilletService: BilletService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        { provide: 'BilletService', useClass: StarkbankBilletService },
      ],
    }).compile();

    starkbankBilletService = app.get<BilletService>('BilletService');
  });

  describe('#create', () => {
    it('Should create a billet with success', async () => {
      const mockedBoletoPaymentResult =
        MockBilletBuilder.buildStarkBankBilletResult().getBillet();

      jest
        .spyOn(boletoPayment, 'create')
        .mockResolvedValue([mockedBoletoPaymentResult]);

      const mockedBilletInput: CreateBillet =
        MockBilletBuilder.buildCreateBilletDto().getBillet();

      const mockStarkBankBilletInput = new CreateStarkBankBillet(
        mockedBilletInput,
      );

      const result = await starkbankBilletService.create(mockedBilletInput);

      expect(boletoPayment.create).toHaveBeenCalledWith([
        mockStarkBankBilletInput,
      ]);
      expect(result).toBeInstanceOf(Billet);
    });

    it.todo(
      'Should send the created billet in pdf by user email when create is successful',
    );
  });
});
