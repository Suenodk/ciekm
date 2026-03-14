import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGebruikerDto } from './dto/create-gebruiker.dto';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class GebruikerService {

  constructor(private prisma: PrismaService) { }

  create(createGebruikerDto: Prisma.GebruikerCreateInput) {
    return this.prisma.gebruiker.create({data: createGebruikerDto})
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
