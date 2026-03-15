import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { GroepService } from './groep.service';
import { CreateGroepDto } from './dto/create-groep.dto';
import { CreateGroepResponseDto } from './dto/create-groep-response.dto';

@Controller('groep')
export class GroepController {
  constructor(private readonly groepService: GroepService) { }

  @Post()
  async createGroep(@Body() dto: CreateGroepDto): Promise<CreateGroepResponseDto> {
    if (!dto) {
      throw new BadRequestException("Je moet wel iets opsturen he")
    }

    const result = await this.groepService.createGroep(dto.gebruikerId, dto.naam, dto.bijeenkomstDatum);

    if (result.errorMessage) {
      throw new BadRequestException(result.errorMessage);
    }

    return result;
  }
}
