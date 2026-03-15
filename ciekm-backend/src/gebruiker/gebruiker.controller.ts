import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGebruikerResponseDto } from './dto/create-gebruiker-response.dto';
import { CreateGebruikerDto } from './dto/create-gebruiker.dto';
import { GebruikerDto } from './dto/gebruiker.dto';
import { GebruikerService } from './gebruiker.service';

@Controller('gebruiker')
export class GebruikerController {
  constructor(private readonly gebruikerService: GebruikerService) { }

  @Post()
  async create(@Body() createGebruikerDto: CreateGebruikerDto): Promise<CreateGebruikerResponseDto> {
    const result = await this.gebruikerService.create(createGebruikerDto.naam, createGebruikerDto.password);

    if (result.errorMessage) {
      throw new BadRequestException(result.errorMessage);
    }

    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<GebruikerDto> {
    const result = await this.gebruikerService.getById(id);

    if (result.errorMessage) {
      throw new BadRequestException(result.errorMessage);
    }

    return result;
  }
}
