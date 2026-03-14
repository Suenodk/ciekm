import { Injectable } from '@nestjs/common';
import { TrekLootjeDto } from './dto/trek-lootje.dto';

@Injectable()
export class LootjeService {
  trekLootje(trekLootjeDto: TrekLootjeDto) {
    return trekLootjeDto.deelnemers[
      Math.floor(Math.random() * trekLootjeDto.deelnemers.length)
    ];
  }
}
