import { Module } from '@nestjs/common';
import { GebruikerService } from './gebruiker.service';
import { GebruikerController } from './gebruiker.controller';

@Module({
  controllers: [GebruikerController],
  providers: [GebruikerService],
})
export class GebruikerModule {}
