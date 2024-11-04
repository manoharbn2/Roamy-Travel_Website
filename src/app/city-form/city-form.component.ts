
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
import { City } from '../cities/city-obs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {
  id: number | undefined;
  city: City = {
    id: 0,
    description: '',
    placesToSee: [],
    rating: 0,
    image: '',
    category: '',
    price: undefined
  };
  isEditMode: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      if (this.id) {
        // Edit mode
        this.isEditMode = true;
        const foundCity = this.citiesService.getCityById(this.id);
        if (foundCity) {
          this.city = foundCity;
        } else {
          alert("City not found");
          this.router.navigate(['/cities']);
        }
      } else {
        
        this.isEditMode = false;
        this.city = {
          id: 0,
          description: '',
          placesToSee: [],
          rating: 0,
          image: '',
          category: '',
          price: undefined
        };
      }
    });
  }

  onSave(): void {
    if (this.isEditMode) {
     
      this.citiesService.updateCity(this.city);
      alert("City updated successfully");
    } else {
      
      this.citiesService.addCity(this.city);
      alert("New city added successfully");
    }
    this.router.navigate(['/cities']);
  }
}
