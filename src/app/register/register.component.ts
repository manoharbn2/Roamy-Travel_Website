import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  saveRegisterForm(form: any) {
    if (form.valid) {
      const userData = {
        username: form.value.username,
        email: form.value.email,
        password: form.value.password
      };
      localStorage.setItem('user', JSON.stringify(userData));  // Store in localStorage
      alert('Registration successful! Please log in.');
      this.router.navigate(['/login']);  // Redirect to login after registration
    } else {
      alert('Please correct the errors in the form before submitting.');
    }
  }
}
