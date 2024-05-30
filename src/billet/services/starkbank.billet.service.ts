import { CreateBillet } from '../dto/create-billet.dto';
import { Billet } from '../entities/billet';
import { BilletStatus } from '../enums/billet-status';
import { IBillet } from '../interfaces/Billet';
import { BilletService } from './billet.service';

export class StarkbankBilletService extends BilletService {
  async create(createBilletDto: CreateBillet): Promise<Billet> {
    const billet: IBillet = {
      id: '1',
      ...createBilletDto,
      createdAt: new Date().toISOString(),
      fee: 0,
      status: BilletStatus.created,
    };

    return new Billet(billet);
  }
}
