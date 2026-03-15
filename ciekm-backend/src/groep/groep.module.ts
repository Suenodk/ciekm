import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GroepController } from './groep.controller';
import { GroepService } from './groep.service';

@Module({
  controllers: [GroepController],
  providers: [GroepService, PrismaService],
})
export class GroepModule { }
