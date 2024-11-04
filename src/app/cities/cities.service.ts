import { Injectable } from '@angular/core';

export interface City {
  id: number;
  description: string;
  placesToSee: string[];
  rating: number;
  image: string;
  category: string;
  price?: number;
}

@Injectable({
  providedIn: 'root',
})

export class CitiesService {
  private cities: City[] = [
    { id: 1, description: 'Amsterdam, Netherlands', placesToSee: ['Rijksmuseum', 'Van Gogh Museum', 'Anne Frank House'], rating: 5, image: 'assets/amsterdam.jpg', category: 'Cultural', price: 5000 },
    { id: 2, description: 'Cape Town, South Africa', placesToSee: ['Table Mountain', 'Robben Island', 'V&A Waterfront'], rating: 4, image: 'assets/capetown.jpg', category: 'Adventure', price: 6000 },
    { id: 3, description: 'Kyoto, Japan', placesToSee: ['Fushimi Inari Shrine', 'Kinkaku-ji', 'Arashiyama Bamboo Grove'], rating: 3, image: 'assets/iceland.jpg', category: 'Cultural', price: 7000 },
    { id: 4, description: 'Queenstown, New Zealand', placesToSee: ['Milford Sound', 'Skyline Queenstown', 'Lake Wakatipu'], rating: 2, image: 'assets/italy.jpg', category: 'Adventure', price: 8000 },
    { id: 5, description: 'Florence, Italy', placesToSee: ['Uffizi Gallery', 'Florence Cathedral', 'Piazzale Michelangelo'], rating: 1, image: 'assets/japan.jpg', category: 'Cultural', price: 9000 },
    { id: 6, description: 'Seoul, South Korea', placesToSee: ['Gyeongbokgung Palace', 'N Seoul Tower', 'Bukchon Hanok Village'], rating: 5, image: 'assets/mexico.jpg', category: 'Cultural', price: 10000 },
    { id: 7, description: 'Mexico City, Mexico', placesToSee: ['Chapultepec Castle', 'Frida Kahlo Museum', 'Zócalo'], rating: 4, image: 'assets/newzealand.jpg', category: 'Heritage', price: 11000 },
    { id: 8, description: 'Reykjavik, Iceland', placesToSee: ['Blue Lagoon', 'Golden Circle', 'Hallgrímskirkja'], rating: 3, image: 'assets/peru.jpg', category: 'Adventure', price: 12000 },
    { id: 9, description: 'Petra, Jordan', placesToSee: ['The Treasury', 'Monastery', 'High Place of Sacrifice'], rating: 2, image: 'assets/petra.jpg', category: 'Heritage', price: 13000 },
    { id: 10, description: 'Cusco, Peru', placesToSee: ['Machu Picchu', 'Sacsayhuaman', 'Plaza de Armas'], rating: 1, image: 'assets/southkorea.jpg', category: 'Adventure', price: 5000 },
  ];

  getCities(): City[] {
    return this.cities;
  }

  getCityById(id: number): City | undefined {
    return this.cities.find(city => city.id === id);
  }

  updateCity(updatedCity: City): void {
    const index = this.cities.findIndex(city => city.id === updatedCity.id);
    if (index > -1) {
      this.cities[index] = updatedCity;
    }
  }

  
  addCity(newCity: City): void {
    
    const nextId = this.cities.length > 0 ? Math.max(...this.cities.map(city => city.id)) + 1 : 1;
    newCity.id = nextId;  
    this.cities.push(newCity);
  }

  deleteCity(id: number): void {
    this.cities = this.cities.filter(city => city.id !== id);
  }
}
