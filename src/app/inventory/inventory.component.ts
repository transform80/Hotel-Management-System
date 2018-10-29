import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { suppliesData } from '../interface/supply-data';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public supplies: suppliesData;

  constructor(public _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getSuppliesData().subscribe(
      data => {
        this.supplies = data;
      })
  }

}
