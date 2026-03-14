import { Injectable } from '@nestjs/common';
import { CreateGebruikerDto } from './dto/create-gebruiker.dto.js';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto.js';

@Injectable()
export class GebruikerService {
  create(createGebruikerDto: CreateGebruikerDto) {
    return 'woot' 
  }

  findAll() {
    return `This action returns all gebruiker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gebruiker`;
  }

  update(id: number, updateGebruikerDto: UpdateGebruikerDto) {
    return `This action updates a #${id} gebruiker`;
  }

  remove(id: number) {
    return `This action removes a #${id} gebruiker`;
  }
}
