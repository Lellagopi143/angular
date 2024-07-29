import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  source: string = '';
  destination: string = '';
  date: string = '';
  passengers: number = 1;
  classType: string = 'Economy';
  flights: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.source = params['source'];
      this.destination = params['destination'];
      this.date = params['date'];
      this.passengers = params['passengers'];
      this.classType = params['class'];
      this.searchFlights();
    });
  }

  searchFlights() {
    // This should be replaced with an actual API call
    this.flights = [
      { flightName: 'Flight 101', source: this.source, destination: this.destination, date: this.date, time: '10:00 AM', class: this.classType, price: '$100' },
      { flightName: 'Flight 102', source: this.source, destination: this.destination, date: this.date, time: '02:00 PM', class: this.classType, price: '$150' }
    ];
  }

  bookFlight(flight: any) {
    this.router.navigate(['/customer-details'], { state: { flight } });
  }
}
