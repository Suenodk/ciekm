import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LootjeModule } from './lootje/lootje.module';

@Module({
  imports: [LootjeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
