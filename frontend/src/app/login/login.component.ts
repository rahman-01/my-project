import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Login Page</h2>
    <form (ngSubmit)="login()">
      <input type="text" [(ngModel)]="username" name="username" placeholder="Username" />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p *ngIf="message">{{ message }}</p>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  login() {
    if (this.username === 'admin' && this.password === '123') {
      this.message = 'Login sukses!';
    } else {
      this.message = 'Username atau password salah';
    }
  }
}
