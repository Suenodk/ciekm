import { Module } from '@nestjs/common';
import { LootjeService } from './lootje.service';
import { LootjeController } from './lootje.controller';

@Module({
  controllers: [LootjeController],
  providers: [LootjeService],
})
export class LootjeModule {}
