import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { roomData } from '../interface/room-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public rooms: roomData[];
  public fromDay: string;
  public fromMonth: string;
  public fromYear: string;
  public endDay: string;
  public endMonth: string;
  public endYear: string;
  public roomType: string;
  public data:any;
  
  public requestResponse;
  public _roomsUrl = "http://vinpyt.pythonanywhere.com/room-check";
  public _roomsUrl1 = "http://192.168.43.236:5000/room-check";

  constructor(public _dataService: DataService, public http: HttpClient) { }

  ngOnInit() {
    // this._dataService.getRoomsData(this.startDate, this.endDate, this.type)
    //   .subscribe(data => {
    //     this.rooms = data;
    //   })
  }
  onButtonClick() {
    this.data = {
      fromDateDay: this.fromDay,
      fromDateMonth: this.fromMonth,
      fromDateYear: this.fromYear,
      toDateDay: this.endDay,
      toDateMonth: this.endMonth,
      toDateYear: this.endYear,
      type: this.roomType
    }
    console.log(this.data);
    let body = JSON.stringify(this.data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(this._roomsUrl, body).subscribe(data => {
      console.log(data);
      this.requestResponse = data;
      console.log("Response:" + this.requestResponse);
      if (this.requestResponse) {        
      }
      else {
      }
    });
  }
}
