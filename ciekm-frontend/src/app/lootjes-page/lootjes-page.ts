import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lootjes-page',
  imports: [FormsModule],
  templateUrl: './lootjes-page.html',
  styleUrl: './lootjes-page.css',
})
export class LootjesPage {
  readonly nieuweDeelnemerNaam = signal('');
  readonly deelnemers = signal<string[]>([]);
  readonly getrokkenLootje = signal('');
  readonly #http = inject(HttpClient);

  lootjeTrekken(): void {
    this.#http.get("http://localhost:3000", { responseType: 'text' })
      .subscribe((x) => this.getrokkenLootje.set(x));
  }

  deelnemerToevoegen(): void {
    this.deelnemers.update(p => [...p, this.nieuweDeelnemerNaam()]);
    this.nieuweDeelnemerNaam.set('');
  }
}
