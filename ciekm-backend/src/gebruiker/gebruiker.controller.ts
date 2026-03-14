import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateGebruikerDto } from './dto/create-gebruiker.dto';
import { GebruikerService } from './gebruiker.service';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';

@Controller('gebruiker')
export class GebruikerController {
  constructor(private readonly gebruikerService: GebruikerService) {}

  @Post()
  create(@Body() createGebruikerDto: CreateGebruikerDto) {
    return this.gebruikerService.create({name: createGebruikerDto.naam});
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
