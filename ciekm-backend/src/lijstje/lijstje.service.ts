import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Validator } from 'src/validator/validator';
import { CreateLijstjeResponseDto } from './dto/create-lijstje-response.dto';
import { GetLijstjesForGebruikerResopnse } from './dto/get-lijstjes-for-gebruiker-response.dto';

@Injectable()
export class LijstjeService {
  constructor(private prisma: PrismaService) { }

  async createLijstje(gebruikerId: string, naam: string): Promise<CreateLijstjeResponseDto> {
    if (Validator.stringIsNullOrWhitespace(gebruikerId)) {
      return { errorMessage: "Wie ben jij? Wat is jouw IDEE?" }
    }

    if (Validator.stringIsNullOrWhitespace(naam)) {
      return { errorMessage: "Lijstje unknown, net zoals die pokemon, geef m eens een naam!" }
    }

    const existingGebruiker = await this.prisma.gebruiker.findFirst({ where: { id: gebruikerId } });

    if (existingGebruiker === null) {
      return { errorMessage: "Jij mag himmel geen lijstje aanmaken, jij bestaat nog niet eens!" }
    }


    const lijstje = await this.prisma.lijstje.create({ data: { naam: naam, gebruikerId: gebruikerId } })

    return { id: lijstje.id, naam: lijstje.naam, gebruikerId: lijstje.gebruikerId }
  }

  async getLijstjesForGebruiker(gebruikerId: string): Promise<GetLijstjesForGebruikerResopnse> {
    if (Validator.stringIsNullOrWhitespace(gebruikerId)) {
      return { errorMessage: "Wie ben jij? Wat is jouw IDEE?" }
    }

    const lijstjes = await this.prisma.lijstje.findMany({ where: { gebruikerId: gebruikerId } });

    const lijstjesDto = lijstjes.map(x => ({ id: x.id, naam: x.naam, eigenaarId: x.gebruikerId }))

    return { lijstes: lijstjesDto }
  }
}
