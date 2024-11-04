import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CityDetailsComponent } from './city-details/city-details.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutUsComponent, BookingComponent, ContactUsComponent, HomeComponent,CitiesComponent,RouterOutlet,RouterLink,CurrencyPipe,RouterLinkActive,CityDetailsComponent,RegisterComponent,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom-app';
  backgroundImageUrl = '';
  currentContent: string = 'home';
  router: Router = new Router;

  showContent(content: string) {
    this.currentContent = content;
}

isLoggedIn(): boolean {
  return localStorage.getItem('isLoggedIn') === 'true';
}

// Logout user and redirect to login page
logout(): void {
  localStorage.removeItem('isLoggedIn');
  this.router.navigate(['/login']);
}

}
