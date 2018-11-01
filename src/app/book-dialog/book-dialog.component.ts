import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit {

  public username:string;
  public paymentMethod:string;
  public postData;
  public _bookUrl = "";
  public requestResponse:any;

  constructor(public dialogRef: MatDialogRef<BookDialogComponent>,@Inject (MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }

  ngOnInit() {
    console.log(this.data);
    
  }

  book() {
    let sDate = this.data.startDate.split('/');
    let tDate = this.data.endDate.split('/');

    this.postData = {
      fromDateDay: sDate[0],
      fromDateMonth: sDate[1],
      fromDateYear: sDate[2],
      toDateDay: tDate[0],
      toDateMonth: tDate[1],
      toDateYear: tDate[2],
      type: this.data.type,
      user: this.username,
      paymentMethod: this.paymentMethod,
      roomNum: this.data.roomNum
    }
    
    
    console.log(this.postData);
    let body = JSON.stringify(this.data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(this._bookUrl, body).subscribe(data => {
      console.log(data);
      this.requestResponse = data;
      console.log("Response:" + this.requestResponse);
      if (this.requestResponse) {        
      }
      else {
      }
    });
    this.dialogRef.close();
  }
}



