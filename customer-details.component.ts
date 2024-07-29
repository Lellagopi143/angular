import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  flight: any;
  name: string = '';
  email: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.flight = history.state.flight;
    if (!this.flight) {
      this.router.navigate(['/']);
    }
  }

  onConfirm() {
    this.router.navigate(['/flight-confirmation'], {
      state: {
        flight: this.flight,
        customer: {
          name: this.name,
          email: this.email
        }
      }
    });
  }
}

