import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private router: Router) {}

  onLogin() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === this.loginData.email && user.password === this.loginData.password) {
      localStorage.setItem('isLoggedIn', 'true');  
      this.router.navigate(['/home']);  
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
