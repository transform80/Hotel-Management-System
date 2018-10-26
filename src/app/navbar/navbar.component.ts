import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router, ) { }

  ngOnInit() {
  }
  onNavClicked(x){
    switch(x){
      case 1:
        this.router.navigate(['']);
        break;
      case 2:
        this.router.navigate(['/restaurant']);
        break;
      case 5:
        this.router.navigate(['/booking']);
        break;
      case 7:
        this.router.navigate(['/rooms']);
        break;
      case 4:
        this.router.navigate(['/staff']);
        break;
      default:
        break;
    }
  }
}
