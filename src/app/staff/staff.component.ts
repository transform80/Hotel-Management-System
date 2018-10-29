import { Component, OnInit } from '@angular/core';
import { employeeData } from '../interface/employee-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  public staff: employeeData[];

  constructor(public _dataService:DataService) { }

  ngOnInit() {
    this._dataService.getEmployeeData()
    .subscribe(data => {
      this.staff = data;
    })
  }

}
