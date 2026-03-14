import { Module } from '@nestjs/common';
import { LootjeController } from './lootje.controller.js';
import { LootjeService } from './lootje.service.js';

@Module({
  controllers: [LootjeController],
  providers: [LootjeService],
})
export class LootjeModule { }
