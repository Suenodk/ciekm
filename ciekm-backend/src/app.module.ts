import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LootjeModule } from './lootje/lootje.module';
import { GebruikerModule } from './gebruiker/gebruiker.module';

@Module({
  imports: [LootjeModule, GebruikerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
