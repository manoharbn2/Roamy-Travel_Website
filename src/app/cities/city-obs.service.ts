import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
export class CityObsService {
    
  private citiesUrl = 'api/cities.json'; 

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    debugger;
    return this.http.get<City[]>(this.citiesUrl).pipe(
      tap(data => console.log('Fetched Cities:', data)),
      catchError(error => {
        console.error('Error fetching cities:', error);
        return throwError(() => new Error('Failed to fetch cities data'));
      })
    );
  }

  getCityById(id: number): Observable<City | undefined> {
    return this.getCities().pipe(
      map((cities: City[]) => cities.find(city => city.id === id)),
      catchError(error => {
        console.error('Error fetching city by ID:', error);
        return throwError(() => new Error('Failed to fetch city data'));
      })
    );
  }
}
