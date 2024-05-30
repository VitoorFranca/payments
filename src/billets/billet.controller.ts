import { Controller, Body, Post, Inject } from '@nestjs/common';
import { CreateBillet } from './dto/create-billet.dto';
import { Billet } from './entities/billet';
import { BilletService } from './services/billet.service';

@Controller('billets')
export class BilletController {
  constructor(
    @Inject('BilletService') private readonly billetService: BilletService,
  ) {}

  @Post()
  async create(@Body() createBilletDto: CreateBillet): Promise<Billet> {
    return this.billetService.create(createBilletDto);
  }
}
