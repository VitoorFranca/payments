import { CreateBillet } from '../dto/create-billet.dto';
import { Billet } from '../entities/billet';

export abstract class BilletService {
  abstract create(createBilletDto: CreateBillet): Promise<Billet>;
}
