import { Controller, Body, Post, Inject } from '@nestjs/common';
import {
  CreateBillet,
  CreateBilletInput,
} from '../domain/dto/create-billet.dto';
import { Billet } from '../domain//entities/billet';
import { BilletService } from '../domain/services/billet.service';

@Controller('billets')
export class BilletController {
  constructor(
    @Inject('BilletService') private readonly billetService: BilletService,
  ) {}

  @Post()
  async create(@Body() createBilletDto: CreateBilletInput): Promise<Billet> {
    try {
      return this.billetService.create(new CreateBillet(createBilletDto));
    } catch (error) {
      return error;
    }
  }
}
