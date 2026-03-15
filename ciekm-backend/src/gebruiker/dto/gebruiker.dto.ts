import { GroepDto } from "src/groep/dto/groep.dto";
import { LijstjeDto } from "src/lijstje/dto/lijstje.dto";

export class GebruikerDto {
    id?: string;
    naam?: string;
    password?: string;
    groepen?: GroepDto[];
    lijstjes?: LijstjeDto[];
    errorMessage?: string;
}
