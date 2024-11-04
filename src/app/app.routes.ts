import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CitiesComponent } from './cities/cities.component';
import {ErrorComponent} from "./error/error.component";
import { CityDetailsComponent } from './city-details/city-details.component';
import { RegisterComponent } from './register/register.component';
import { CityFormComponent } from './city-form/city-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', component: RegisterComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cities/:id', component: CityDetailsComponent },
  { path: 'cities/:id/edit', component: CityFormComponent },  
  { path: 'city-details', component: CityDetailsComponent },
  { path: 'city-form', component: CityFormComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: ErrorComponent,pathMatch:'full' }
];