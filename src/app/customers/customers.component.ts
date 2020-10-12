import { Component, OnInit } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Customer } from '../customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','orders','edit','delete'];
  dataSource :any;
  URL = 'https://localhost:44339/api/Customers';
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(){
    this.http.get(this.URL).subscribe(Response=>{
      this.dataSource=Response;
    });
  }
  deleteCustomer(number:number){
    this.http.delete(this.URL+'/'+number).subscribe(
      data => this.getCustomers(),
      error => console.log('oops', error)
    )
  }
  
  
  
}
