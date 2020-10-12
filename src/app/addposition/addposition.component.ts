import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Orderposition } from '../orderposition';

@Component({
  selector: 'app-addposition',
  templateUrl: './addposition.component.html',
  styleUrls: ['./addposition.component.scss']
})
export class AddpositionComponent implements OnInit {

  displayedColumns: string[] = ['product', 'quantity','actions'];
  products :any;
  id:any;
  URL = 'https://localhost:44339/api/Products';
  constructor(private http: HttpClient,private _Activatedroute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.id = this._Activatedroute.snapshot.paramMap.get("orderid");
  }
  getProducts(){
    this.http.get(this.URL).subscribe(Response=>{
      this.products=Response;
    });
  }
  addPosition(productId:number,quantity:number){
    console.log(productId);
    const orderposition = new Orderposition(0,Number(this.id),Number(productId),Number(quantity));
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(orderposition);
    this.http.post("https://localhost:44339/api/Orders/Position", orderposition, { headers: headers }).subscribe(
      data => window.location.reload(),
      error => console.log('oops', error)
    );
  }
  
}
