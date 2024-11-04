import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './city-rating.component.html',
  styleUrls: ['./city-rating.component.css']
})
export class CityRatingComponent {

  faStar = faStar;

  @Input() rating: number = 0; 
  @Input() placeName: string | undefined;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  
  starWidth: number | undefined;

  ngOnChanges(): void {
    this.starWidth=this.rating *90 /5;
    
  }

  
  onClick(rating: number): void {
    
    this.ratingClicked.emit(`${this.placeName} - You rated it ${this.rating} stars`);
  }

  getStarClass(index: number): string {
    if (this.rating >= 4 && index < this.rating) return 'green-star';
    if (this.rating === 3 && index < this.rating) return 'orange-star';
    if (this.rating <= 2 && index < this.rating) return 'red-star';
    return 'white-star';
  }

  
}
