import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  URL = 'https://localhost:44339/api/Customers';
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  addCustomer(firstName: string, lastName: string, email: string) {
    const customer = new Customer(0,firstName,lastName,email);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(customer);
    this.http.post(this.URL, customer, { headers: headers }).subscribe(
      data => this.router.navigate([""]),
      error => console.log('oops', error)
    );
    
  }
}
