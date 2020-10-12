import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'manufacturer', 'model', 'price','stashQuantity','edit','delete'];
  dataSource :any;
  URL = 'https://localhost:44339/api/Products';
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.http.get(this.URL).subscribe(Response=>{
      this.dataSource=Response;
    });
  }
  deleteProduct(number:number){
    this.http.delete(this.URL+'/'+number).subscribe(
      data => this.getProducts(),
      error => console.log('oops', error)
    )
  }
  
}
