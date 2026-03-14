import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LijstjeService {
  readonly #http = inject(HttpClient);
  constructor() {}

  getWensen(): string[] {
    return ['geweer', 'foto van Ted en Raoul die zoenen', 'Havermout']; // Example names
  }
}