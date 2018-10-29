import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { roomData } from './interface/room-data';
import { ordersData } from './interface/orders-data';
import { employeeData } from './interface/employee-data';
import { suppliesData } from './interface/supply-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _urlRoomList: string = "";
  public _urlOrdersList: string = "";
  public _urlEmployeeList: string = "";
  public _urlSupplyList: string = "";
  public _urlRoomDetails: string = "";


  constructor(public http: HttpClient ) { }

  getRoomsData(startDate: string, endDate: string, type: number): Observable<roomData[]> {
    return this.http.get<roomData[]>(this._urlRoomList);
  }
  getOrdersData(): Observable<ordersData[]> {
    return this.http.get<ordersData[]>(this._urlOrdersList);
  }
  getRoomInfo(): Observable<roomData[]> {
    return this.http.get<roomData[]>(this._urlRoomDetails);
  }
  getEmployeeData(): Observable<employeeData[]> {
    return this.http.get<employeeData[]>(this._urlEmployeeList);
  }
  getSuppliesData(): Observable<suppliesData[]> {
    return this.http.get<suppliesData[]>(this._urlSupplyList);
  }
}
