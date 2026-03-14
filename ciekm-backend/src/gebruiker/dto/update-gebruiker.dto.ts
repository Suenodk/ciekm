import { PartialType } from '@nestjs/mapped-types';
import { CreateGebruikerDto } from './create-gebruiker.dto';

export class UpdateGebruikerDto extends PartialType(CreateGebruikerDto) {}
