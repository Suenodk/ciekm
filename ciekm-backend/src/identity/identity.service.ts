import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Validator } from 'src/validator/validator';
import { LoginIdentityResponseDto } from './dto/login-identity-response.dto';
import { LoginIdentityDto } from './dto/login-identity.dto';

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
}
