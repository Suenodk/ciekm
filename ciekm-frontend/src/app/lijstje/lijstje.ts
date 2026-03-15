import { Component, signal } from '@angular/core';
import { LijstjeService } from '../services/LijstjeService';

@Component({
  selector: 'app-lijstje',
  imports: [],
  templateUrl: './lijstje.html',
  styleUrl: './lijstje.css',
})
export class Lijstje {
  wensItems = signal<string[]>([]);

  constructor(private lijstjeService : LijstjeService){}

  ngOnInit(): void {
    this.wensItems.set(this.lijstjeService.getWensen());
  }
}
