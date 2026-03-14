import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorage } from '../local-storage';

@Component({
  selector: 'app-lootjes-page',
  imports: [FormsModule],
  templateUrl: './lootjes-page.html',
  styleUrl: './lootjes-page.css',
})
export class LootjesPage {
  readonly #http = inject(HttpClient);
  readonly #localStorage = inject(LocalStorage);
  readonly nieuweDeelnemerNaam = signal('');
  readonly deelnemers = signal<string[]>(this.#localStorage.getListData('deelnemers'));
  readonly getrokkenLootje = signal('');

  lootjeTrekken(): void {
    this.#http.post("/api/lootje",
      { deelnemers: this.deelnemers() },
      { responseType: 'text' })
      .subscribe((x) => this.getrokkenLootje.set(x));
  }

  deelnemerToevoegen(): void {
    this.deelnemers.update(p => [...p, this.nieuweDeelnemerNaam()]);
    this.nieuweDeelnemerNaam.set('');
    this.#localStorage.saveListData("deelnemers", this.deelnemers())
  }
}
