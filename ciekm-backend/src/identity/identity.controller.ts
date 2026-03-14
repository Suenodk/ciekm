import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { LoginIdentityResponseDto } from './dto/login-identity-response.dto';
import { LoginIdentityDto } from './dto/login-identity.dto';
import { IdentityService } from './identity.service';

@Controller('identity')
export class IdentityController {
    constructor(private readonly identityService: IdentityService) { }

    @Post('/login')
    async create(@Body() loginIdentityDto: LoginIdentityDto): Promise<LoginIdentityResponseDto> {
        if (!loginIdentityDto) {
            throw new BadRequestException("Je moet wel iets opsturen he")
        }

        var result = await this.identityService.login(loginIdentityDto.naam, loginIdentityDto.password);

        if (result.errorMessage) {
            throw new BadRequestException(result.errorMessage);
        }

        return result;
    }
}
