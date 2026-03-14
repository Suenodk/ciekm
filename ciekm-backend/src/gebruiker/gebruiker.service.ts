import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Validator } from 'src/validator/validator';
import { CreateGebruikerResponseDto } from './dto/create-gebruiker-response.dto';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';

@Injectable()
export class GebruikerService {

  constructor(private prisma: PrismaService) { }

  async create(naam: string, password: string): Promise<CreateGebruikerResponseDto> {
    if (Validator.stringIsNullOrWhitespace(naam)) {
      return { errorMessage: "Hey jij daar! Jij hebt geen naam! Dat mag niet!" }
    }

    if (Validator.stringIsNullOrWhitespace(password)) {
      return { errorMessage: "Dat wachtwoord is wel heel makkelijk, zelfs chay kan deze raden. Neem een ander wachtwoord." }
    }

    const existingGebruiker = await this.prisma.gebruiker.findFirst({ where: { name: naam } });

    if (existingGebruiker !== null) {
      return { errorMessage: "Gaasstt iemand heeft deze naam al, pak eens een andere!" }
    }

    const gebruikerEntity = await this.prisma.gebruiker.create({ data: { name: naam, password: password } })

    return { id: gebruikerEntity.id, naam: gebruikerEntity.name }
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
