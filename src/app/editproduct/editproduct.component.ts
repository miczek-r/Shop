import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  URL = 'https://localhost:44339/api/Products';
  dataSource:any;
  id:any;
  customer:Product;
  constructor(private http: HttpClient,private router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getProduct();

  }
  getProduct(){
    this.http.get(this.URL+"/"+this.id).subscribe(Response => {
      this.dataSource = Response;
    });
  }

  editProduct(manufacturer:string,model:string,price:number,stashQuantity:number) {
    const product = new Product(Number(this.id),manufacturer,model,Number(price),Number(stashQuantity));
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(product);
    this.http.put(this.URL, product, { headers: headers }).subscribe(
      data => this.router.navigate(["/products"]),
      error => console.log('oops', error)
    );
  }

}
