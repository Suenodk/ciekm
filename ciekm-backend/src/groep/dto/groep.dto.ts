import { GebruikerDto } from "src/gebruiker/dto/gebruiker.dto";

export class GroepDto {
    id: string;
    naam: string;
    bijeenkomstDatum: string | null;
    gebruikers: GebruikerDto[];
}