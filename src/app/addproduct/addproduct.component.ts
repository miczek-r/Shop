import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  URL = 'https://localhost:44339/api/Products';
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(manufacturer:string,model:string,price:number,stashQuantity:number) {
    const product = new Product(0,manufacturer,model,Number(price),Number(stashQuantity));
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(product);
    this.http.post(this.URL, product, { headers: headers }).subscribe(
      data => this.router.navigate(["/products"]),
      error => console.log('oops', error)
    );
    
  }
}
