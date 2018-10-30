import { Component, OnInit } from '@angular/core';
import { ordersData } from '../interface/orders-data';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;
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
  public room = "101";
  public orderNumber = "112";
  public time = "2030 hrs";

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
  addItem(){
    $("#orders").append('<div class="form-group"><input type="email" class="form-control d-inline" style="width:250px;" name="dishName" [(ngModel)]="dishName" placeholder="Dish Name"><span class="badge badge-info mx-2">X</span><input type="text" class="form-control d-inline" style="width:150px;" name="quantity" [(ngModel)]="quantity" placeholder="Quantity"></div>');
  }

  removeItem(){
    if($("#orders").children().length == 1)
      return;
    
    $("#orders").children().last().remove();
  }
}
