import { Component, OnInit } from '@angular/core';
import { ordersData } from '../interface/orders-data';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public roomNo: string;
  public dishName: string;
  public quantity: string;
  public orders: ordersData[];
  public orderData: any;
  public _submitOrderUrl = "";
  public requestResponse: any;

  constructor(public _dataService: DataService, public http: HttpClient) { }

  ngOnInit() {
    this._dataService.getOrdersData()
      .subscribe(data => {
        this.orders = data;
      })
  }

  submitOrder() {
    this.orderData = {
      roomNo: this.roomNo,
      dishName: this.dishName,
      quantity: this.quantity
    }
    console.log(this.orderData);
    let body = JSON.stringify(this.orderData);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(this._submitOrderUrl, body).subscribe(data => {
      console.log(data);
      this.requestResponse = data;
      console.log("Response:" + this.requestResponse);
      if (this.requestResponse.flag == 1) {
        this.roomNo = "";
        this.quantity = "";
        this.dishName = "";
        this._dataService.getOrdersData()
          .subscribe(data => {
            this.orders = data;
          })

      }
      else {
        console.log("Order failed to be added");
      }
    });

  }

}
