import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyRupeePipe } from '../currency-rupee.pipe';
import { Router } from '@angular/router';
import { CityRatingComponent } from '../shared/city-rating/city-rating.component';
import { CitiesService } from '../cities/cities.service'; 
import { CityObsService, City } from './city-obs.service';



@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyRupeePipe, CityRatingComponent],
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit, OnDestroy {

  title: string = '';
  cities: City[] = [];
  filteredCities: City[] = [];
  selectedFilter: string = 'All';
  showImage: boolean[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private citiesService: CitiesService,private cityObsService: CityObsService) { }

  ngOnInit(): void {
    debugger;
    this.cityObsService.getCities().subscribe({
      next: (data: City[]) => {
        this.cities = data;
        this.filteredCities = data; 
      },
      error: (err) => console.error('Error loading cities:', err)
    });
  }

  ngOnDestroy(): void {
    console.log('CitiesComponent Destroyed');
  }

  toggleImage(index: number): void {
    this.showImage[index] = !this.showImage[index];
  }

  updateFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedFilter = target?.value || 'All';
    this.filteredCities = this.filterCities();
  }

  onSearchChange(): void {
    this.filteredCities = this.filterCities();
  }

  filterCities(): City[] {
    const filteredByCategory = this.selectedFilter === 'All'
      ? this.cities
      : this.cities.filter(city => city.category === this.selectedFilter);

    return filteredByCategory.filter(city =>
      city.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToCities(cityId: number): void {
    this.router.navigate(['/cities', cityId]);
  }

  onRatingClicked(rate: string): void {
    this.title = rate;
  }

  navigateToAddCity(): void {
    this.router.navigate(['/city-form']); 
  }
  

  editCity(id: number): void {
    this.router.navigate([`/cities/${id}/edit`]); 
  }

  deleteCity(id: number): void {
    if (confirm('Are you sure you want to delete this city?')) {
      this.citiesService.deleteCity(id);
      this.filteredCities = this.citiesService.getCities(); 
    }
}
}
