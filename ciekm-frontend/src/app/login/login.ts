import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isOnLogin = signal(true);

   toggleLogin(): void {
    this.isOnLogin.set(!this.isOnLogin());
  }

  login(): void {
    console.log("login")
  }

  registreer(): void {

  }
}
