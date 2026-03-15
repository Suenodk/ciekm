import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLijstjeResponseDto } from './dto/create-lijstje-response.dto';
import { CreateLijstjeDto } from './dto/create-lijstje.dto';
import { GetLijstjesForGebruikerResopnse } from './dto/get-lijstjes-for-gebruiker-response.dto';
import { LijstjeService } from './lijstje.service';

@Controller('lijstje')
export class LijstjeController {
  constructor(private readonly lijstjeService: LijstjeService) { }

  @Post()
  async createLijstje(@Body() dto: CreateLijstjeDto): Promise<CreateLijstjeResponseDto> {
    if (!dto) {
      throw new BadRequestException("Je moet wel iets opsturen he")
    }

    const result = await this.lijstjeService.createLijstje(dto.gebruikerId, dto.naam);

    if (result.errorMessage) {
      throw new BadRequestException(result.errorMessage);
    }

    return result;
  }

  @Get('/gebruiker/:id')
  async getLijstjesForGebruiker(@Param('id') gebruikerId: string): Promise<GetLijstjesForGebruikerResopnse> {
    const result = await this.lijstjeService.getLijstjesForGebruiker(gebruikerId);

    if (result.errorMessage) {
      throw new BadRequestException(result.errorMessage);
    }

    return result;
  }
}
