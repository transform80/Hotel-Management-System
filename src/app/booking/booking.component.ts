import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { roomData } from '../interface/room-data';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public rooms: roomData[];
  public startDate: string;
  public endDate: string;
  public roomType: number;

  constructor(public _dataService: DataService) { }

  ngOnInit() {
    // this._dataService.getRoomsData(this.startDate, this.endDate, this.type)
    //   .subscribe(data => {
    //     this.rooms = data;
    //   })
  }

  onButtonClick() {
    this._dataService.getRoomsData(this.startDate, this.endDate,this.roomType)
      .subscribe(data => {
        this.rooms = data;
      })
  }



}
