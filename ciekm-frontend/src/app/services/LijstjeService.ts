import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LijstjeService {
  readonly #http = inject(HttpClient);
  constructor() {}

  getWensen(): string[] {
    return ['Alice', 'Bob', 'Charlie']; // Example names
  }
}