import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { Customer } from '../customer';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss']
})
export class EditcustomerComponent implements OnInit {
  URL = 'https://localhost:44339/api/Customers';
  dataSource:any;
  id:any;
  customer:Customer;
  
  constructor(private http: HttpClient,private router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.http.get(this.URL+"/"+this.id).subscribe(Response => {
      this.dataSource = Response;
    });

    

  }
  editCustomer(firstName: string, lastName: string, email: string) {
    const customer = new Customer(Number(this.id),firstName,lastName,email);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(customer);
    this.http.put(this.URL, customer, { headers: headers }).subscribe(
      data => this.router.navigate([""]),
      error => console.log('oops', error)
    );
    //this.router.navigate([""]);
  }
}
