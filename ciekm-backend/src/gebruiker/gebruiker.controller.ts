import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateGebruikerResponseDto } from './dto/create-gebruiker-response.dto';
import { CreateGebruikerDto } from './dto/create-gebruiker.dto';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';
import { GebruikerService } from './gebruiker.service';

@Controller('gebruiker')
export class GebruikerController {
  constructor(private readonly gebruikerService: GebruikerService) { }

  @Post()
  async create(@Body() createGebruikerDto: CreateGebruikerDto): Promise<CreateGebruikerResponseDto> {
    const result = await this.gebruikerService.create(createGebruikerDto.naam, createGebruikerDto.password);

    if(result.errorMessage) {
      throw new BadRequestException(result.errorMessage);
    }

    return result;
  }

  @Get()
  findAll() {
    return this.gebruikerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gebruikerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGebruikerDto: UpdateGebruikerDto) {
    return this.gebruikerService.update(+id, updateGebruikerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gebruikerService.remove(+id);
  }
}
