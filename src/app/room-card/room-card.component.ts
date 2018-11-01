import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() cost:string;
  @Input() roomNum: string;
  @Input() type: string;
  @Input() capacity: string;
  @Input() occupied: boolean;
  @Input() startDate: string;
  @Input() endDate: string;


  constructor(public _dialog: MatDialog)
 { }

  ngOnInit() {

  }

  openBook(){
    let dialogRefShare = this._dialog.open(BookDialogComponent, {
      width: '600px',
      data: {
        roomNum: this.roomNum,
        type: this.type,
        capacity: this.capacity,
        startDate: this.startDate,
        endDate: this.endDate,
        cost:this.cost
      }
    })

  }

}
