import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public loginData: any;
  public requestResponse;
  public _verifyUrl = "";
  public error: boolean;
  public errorMessage: string;


  constructor(public http: HttpClient, public router: Router, public _userService:UserService) { }

  ngOnInit() {
  }

  login() {
    this.loginData = {
      username: this.username,
      password: this.password
    }
    console.log(this.loginData);
    let body = JSON.stringify(this.loginData);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(this._verifyUrl, body).subscribe(data => {
      console.log(data);
      this.requestResponse = data;
      console.log("Response:" + this.requestResponse);
      if (this.requestResponse.flag == 1) {
        this.error = false;
        this._userService.setUserLoggedIn(this.username);
        this.router.navigate(['']);
      }
      else {
        this.error = true;
        this.errorMessage = "Incorrect Username or/and password"
      }
    });
  }

}

