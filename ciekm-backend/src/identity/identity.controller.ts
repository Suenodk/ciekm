import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { LoginIdentityResponseDto } from './dto/login-identity-response.dto';
import { LoginIdentityDto } from './dto/login-identity.dto';
import { IdentityService } from './identity.service';
import { RegisterIdentityDto } from './dto/register-identity.dto';
import { RegisterIdentityResponseDto } from './dto/register-identity-response.dto';

@Controller('identity')
export class IdentityController {
    constructor(private readonly identityService: IdentityService) { }

    @Post('/login')
    async login(@Body() loginIdentityDto: LoginIdentityDto): Promise<LoginIdentityResponseDto> {
        if (!loginIdentityDto) {
            throw new BadRequestException("Je moet wel iets opsturen he")
        }

        var result = await this.identityService.login(loginIdentityDto.naam, loginIdentityDto.password);

        if (result.errorMessage) {
            throw new BadRequestException(result.errorMessage);
        }

        return result;
    }

    @Post('/register')
    async register(@Body() dto: RegisterIdentityDto): Promise<RegisterIdentityResponseDto> {
        if (!dto) {
            throw new BadRequestException("Je moet wel iets opsturen he")
        }

        var result = await this.identityService.register(dto.naam, dto.password);

        if (result.errorMessage) {
            throw new BadRequestException(result.errorMessage);
        }

        return result;
    }
}
