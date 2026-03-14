import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroepService } from '../services/GroepService';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  deelnemers = signal<string[]>([]);

  constructor(private groepService : GroepService){}

  ngOnInit(): void {
    this.deelnemers.set(this.groepService.getDeelnemers());
  }
}
