import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, public _userService: UserService) { }

  ngOnInit() {
  }
  onNavClicked(x) {
    switch (x) {
      case 1:
        this.router.navigate(['']);
        break;
      case 2:
        this.router.navigate(['/rooms']);
        break;
      case 3:
        this.router.navigate(['/staff']);
        break;
      case 4:
        this.router.navigate(['/restaurant']);
        break;
      case 5:
        this.router.navigate(['/supplies']);
        break;
      case 6:
        this._userService.setUserLoggedOut();
        
        break;
      default:
        break;
    }
  }
}
