import {
  Controller,
  Body,
  Post,
  Inject,
  BadRequestException,
} from '@nestjs/common';
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
  async create(@Body() createBilletInput: CreateBilletInput): Promise<Billet> {
    return this.billetService.create(this.buildBillet(createBilletInput));
  }

  private buildBillet(createBilletInput: CreateBilletInput): CreateBillet {
    try {
      const createBillet = new CreateBillet(createBilletInput);
      return createBillet;
    } catch (error) {
      throw new BadRequestException({
        code: 'invalid receiverIdentity',
        message: error.message,
        ...error,
      });
    }
  }
}
