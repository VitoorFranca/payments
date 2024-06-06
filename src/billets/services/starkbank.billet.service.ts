import { CreateBillet } from '../dto/create-billet.dto';
import { CreateStarkBankBillet } from '../dto/create-starkbank-billet.dto';
import { Billet } from '../entities/billet';
import { BilletService } from './billet.service';
import { boletoPayment } from 'starkbank';

export class StarkbankBilletService extends BilletService {
  async create(createBilletDto: CreateBillet): Promise<Billet> {
    try {
      const createStarkBankBillet = new CreateStarkBankBillet(createBilletDto);
      const [billet] = await boletoPayment.create([createStarkBankBillet]);
      return new Billet({
        ...billet,
        amountInCents: billet.amount,
        receiverIdentity: billet.taxId,
        createdAt: billet.created,
      });
    } catch (error) {
      console.log('DEU ERRO NO STARKBANK BILLET SERVICE');
      console.log(error);

      return error;
    }
  }
}
