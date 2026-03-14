import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-lootjes-page',
  imports: [],
  templateUrl: './lootjes-page.html',
  styleUrl: './lootjes-page.css',
})
export class LootjesPage {
  readonly getrokkenLootje = signal('');
  readonly #http = inject(HttpClient);

  lootjeTrekken(): void {
    console.log('lootje trekken')
    this.#http.get("http://localhost:3000", { responseType: 'text' })
      .subscribe((x) => this.getrokkenLootje.set(x));
  }
}
