import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  router = inject(Router);

  username = '';
  password = '';
  error = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin']);
    } else {
      this.error = '❌ Invalid username or password!';
    }
  }
}