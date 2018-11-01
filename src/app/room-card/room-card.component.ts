import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
