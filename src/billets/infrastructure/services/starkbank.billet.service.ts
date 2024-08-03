import { BadRequestException } from '@nestjs/common';
import { CreateBillet } from '../../domain/dto/create-billet.dto';
import { CreateStarkBankBillet } from '../../domain/dto/create-starkbank-billet.dto';
import { Billet } from '../../domain/entities/billet';
import { BilletService } from '../../domain/services/billet.service';
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
    } catch (err) {
      const error = JSON.parse(err.message);
      throw new BadRequestException(error.errors[0]);
    }
  }
}
