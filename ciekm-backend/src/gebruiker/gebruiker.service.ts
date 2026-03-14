import { Injectable } from '@nestjs/common';
import { CreateGebruikerDto } from './dto/create-gebruiker.dto';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';

@Injectable()
export class GebruikerService {
  create(createGebruikerDto: CreateGebruikerDto) {
    return 'woot2' 
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
