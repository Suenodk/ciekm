import { Module } from '@nestjs/common';
import { GebruikerService } from './gebruiker.service';
import { GebruikerController } from './gebruiker.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GebruikerController],
  providers: [GebruikerService, PrismaService],
})
export class GebruikerModule {}
