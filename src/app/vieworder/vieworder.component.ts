import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.scss']
})
export class VieworderComponent implements OnInit {
  id:any;
  customerid:any;
  displayedColumns: string[] = ['product','quantity','ppu','price','delete'];
  product:Product[] = [];
  dataSource :any;
  URL = 'https://localhost:44339/api/Orders/Position/ByOrderId/';
  constructor(private http: HttpClient,private _Activatedroute: ActivatedRoute,private router:Router) {
    this.id = this._Activatedroute.snapshot.paramMap.get("orderid");
    this.customerid =this._Activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getOrderPositions();
    this.http.get<Product[]>("https://localhost:44339/api/Products/").subscribe(Response=>{
      this.product=Response;
    });
  }
  getOrderPositions(){
    this.http.get(this.URL+this.id).subscribe(Response=>{
      this.dataSource=Response;
    });
  }
  
  deletePosition(id:number){
    this.http.delete("https://localhost:44339/api/Orders/Position/"+id).subscribe(
      data => this.getOrderPositions(),
      error => console.log('oops', error)
    );
      
    
  }
 
}
