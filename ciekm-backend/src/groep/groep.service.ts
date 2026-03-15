import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Validator } from 'src/validator/validator';
import { CreateGroepResponseDto } from './dto/create-groep-response.dto';

@Injectable()
export class GroepService {
    constructor(private prisma: PrismaService) { }

    async createGroep(gebruikerId: string, naam: string, bijeenkomstDatum: string | null): Promise<CreateGroepResponseDto> {
        if (Validator.stringIsNullOrWhitespace(gebruikerId)) {
            return { errorMessage: "What's your ID?" }
        }

        if (Validator.stringIsNullOrWhitespace(naam)) {
            return { errorMessage: "Deze groep is onbestaand omdat deze geen name heeft gekregen xd" }
        }

        const existingGebruiker = await this.prisma.gebruiker.findFirst({ where: { id: gebruikerId } });

        if (existingGebruiker === null) {
            return { errorMessage: "Gij kunt geen groep aanmaken, jij bent niet legit!" }
        }


        const groep = await this.prisma.groep.create({ data: { naam: naam, gebruikers: { connect: [{ id: gebruikerId }] } } })

        return { id: groep.id, naam: groep.naam }
    }
}
