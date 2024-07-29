import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  source: string = '';
  destination: string = '';
  date: string = '';
  passengers: number = 1;
  classType: string = 'Economy';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/search-results'], {
      queryParams: {
        source: this.source,
        destination: this.destination,
        date: this.date,
        passengers: this.passengers,
        class: this.classType
      }
    });
  }
}
