import { Body, Controller, Post } from '@nestjs/common';
import { TrekLootjeDto } from './dto/trek-lootje.dto';
import { LootjeService } from './lootje.service';

@Controller('lootje')
export class LootjeController {
  constructor(private readonly lootjeService: LootjeService) { }

  @Post()
  trekLootje(@Body() trekLootjeDto: TrekLootjeDto) {
    return this.lootjeService.trekLootje(trekLootjeDto);
  }
}
