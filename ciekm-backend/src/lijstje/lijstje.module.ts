import { Module } from '@nestjs/common';
import { LijstjeService } from './lijstje.service';
import { LijstjeController } from './lijstje.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LijstjeController],
  providers: [LijstjeService, PrismaService],
})
export class LijstjeModule {}
