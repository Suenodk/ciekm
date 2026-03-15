import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LootjeModule } from './lootje/lootje.module';
import { GebruikerModule } from './gebruiker/gebruiker.module';
import { IdentityModule } from './identity/identity.module';
import { LijstjeModule } from './lijstje/lijstje.module';
import { GroepModule } from './groep/groep.module';

@Module({
  imports: [LootjeModule, GebruikerModule, IdentityModule, LijstjeModule, GroepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
