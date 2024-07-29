import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-confirmation',
  templateUrl: './flight-confirmation.component.html',
  styleUrls: ['./flight-confirmation.component.css']
})
export class FlightConfirmationComponent implements OnInit {
  flight: any;
  customer: any;

  ngOnInit() {
    this.flight = history.state.flight;
    this.customer = history.state.customer;
  }

  downloadTicket() {
    const ticket = `
      Flight: ${this.flight.flightName}
      From: ${this.flight.source} To: ${this.flight.destination}
      Date: ${this.flight.date} Time: ${this.flight.time}
      Class: ${this.flight.class}
      Price: ${this.flight.price}
      Customer Name: ${this.customer.name}
      Customer Email: ${this.customer.email}
    `;
    const blob = new Blob([ticket], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
