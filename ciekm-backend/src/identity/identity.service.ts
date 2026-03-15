import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Validator } from 'src/validator/validator';
import { LoginIdentityResponseDto } from './dto/login-identity-response.dto';
import { RegisterIdentityResponseDto } from './dto/register-identity-response.dto';

@Injectable()
export class IdentityService {

    constructor(private prisma: PrismaService) { }

    async login(naam: string, password: string): Promise<LoginIdentityResponseDto> {
        if (Validator.stringIsNullOrWhitespace(naam)) {
            return { errorMessage: 'vul eens een naam in jij!' }
        }

        if (Validator.stringIsNullOrWhitespace(password)) {
            return { errorMessage: 'ja zonder w8woord kom jij niet binnen kerel' }
        }

        const gebruiker = await this.prisma.gebruiker.findFirst({ where: { name: naam, password: password } });
        if (gebruiker === null) {
            return { errorMessage: 'HA! I play my authorization magician in denied mode' }
        }

        return { id: gebruiker.id, naam: gebruiker.name }
    }

    async register(naam: string, password: string): Promise<RegisterIdentityResponseDto> {
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

        const gebruiker = await this.prisma.gebruiker.create({ data: { name: naam, password: password } });

        return { id: gebruiker.id, naam: gebruiker.name }
    }
}
