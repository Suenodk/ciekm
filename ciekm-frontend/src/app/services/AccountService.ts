import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GebruikerDto } from '../Models/GebruikerDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly #http = inject(HttpClient);
  constructor() {}

  maakAccount(naam : string) : void{
    let model : GebruikerDto = {naam };
    this.#http.post("/api/gebruiker", model)
  }
}