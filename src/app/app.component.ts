import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Management System';
  public loggedIn;
  constructor(public _userService: UserService){ 
  }
  ngOnInit(){
    this.loggedIn = this._userService.getUserLoggedIn();
  }
}
