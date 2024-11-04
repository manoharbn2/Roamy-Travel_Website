import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
import { CommonModule } from '@angular/common';

interface City {
  id: number;
  description: string;
  placesToSee: string[];
  rating: number;
  image: string;
  category: string;
  price?: number;
}


@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-details.component.html',
  styleUrl: './city-details.component.css'
})



export class CityDetailsComponent {

  id:number |undefined;


  name: string | null = null;
  details: string[] = [];

  
// DEPENDENCY INJECTION

  constructor(private route: ActivatedRoute,private citiesService: CitiesService ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cityId = +params.get('id')!;
      const selectedCity = this.citiesService.getCityById(cityId);

      if (selectedCity) {
        this.name = selectedCity.description;
        this.details = selectedCity.placesToSee;
      }
    });
  }

}
