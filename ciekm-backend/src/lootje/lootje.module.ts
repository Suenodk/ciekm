import { Module } from '@nestjs/common';
import { LootjeController } from './lootje.controller';
import { LootjeService } from './lootje.service';

@Module({
  controllers: [LootjeController],
  providers: [LootjeService],
})
export class LootjeModule { }
