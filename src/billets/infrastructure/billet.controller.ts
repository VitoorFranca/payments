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
import { ValidationError } from 'class-validator';

@Controller('billets')
export class BilletController {
  constructor(
    @Inject('BilletService') private readonly billetService: BilletService,
  ) {}

  @Post()
  async create(@Body() createBilletDto: CreateBilletInput): Promise<Billet> {
    try {
      const billet = await this.billetService.create(
        new CreateBillet(createBilletDto),
      );
      return billet;
    } catch (error) {
      const validationError = new ValidationError();

      validationError.contexts = {
        status: '400',
        message: error.message,
        ...error,
      };

      throw new BadRequestException(validationError.contexts);
    }
  }
}
