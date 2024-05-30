import { Controller, Body, Post } from '@nestjs/common';
import { CreateBillet } from './dto/create-billet.dto';
import { Billet } from './entities/billet';
import { IBillet } from './interfaces/Billet';
import { BilletStatus } from './enums/billet-status';

@Controller('billet')
export class BilletController {
  constructor() {}

  @Post()
  async create(@Body() createBilletDto: CreateBillet): Promise<Billet> {
    const billet: IBillet = {
      id: '1',
      ...createBilletDto,
      createdAt: '2020-04-24T01:33:40.611174+00:00',
      fee: 0,
      status: BilletStatus.created,
    };

    return new Billet(billet);
  }
}
