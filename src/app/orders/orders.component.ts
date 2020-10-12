import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'view','delete'];
  id: any;
  dataSource: any;
  URL = "https://localhost:44339/api/Orders"
  constructor(private http: HttpClient, private _Activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getOrders();
  }

  getOrders() {
    this.http.get(this.URL + '/ByCustomerId/' + this.id).subscribe(Response => {
      this.dataSource = Response;
    });
  }

  addOrder() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    const order = new Order(0, dateTime, Number(this.id));
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(this.URL, order, { headers: headers }).subscribe(
      data => this.getOrders(),
      error => console.log('oops', error)
    );
  }
  deleteOrder(id: number) {
    this.http.delete(this.URL + "/" + id).subscribe(
      data => this.getOrders(),
      error => console.log('oops', error)
    );
  }
}
