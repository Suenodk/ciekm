import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroepService {
  readonly #http = inject(HttpClient);
  constructor() {}

  getDeelnemers(): string[] {
    return ['Alice', 'Bb', 'Charlie']; // Example names
  }
}