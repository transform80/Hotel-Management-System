import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isUserLoggedIn = 'true';
  public username;


  constructor() { }
  setUserLoggedIn(username) {
    this.username = username;
    this.isUserLoggedIn = 'true';
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('subscriberId', username);
  }
  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.isUserLoggedIn);
    // return true;
  }
  getUserName() {
    this.username = localStorage.getItem('subscriberId').toString();
    console.log("Subscriber Id:" + this.username);
    return this.username;
  }
  setUserLoggedOut() {
    localStorage.setItem('loggedIn','true');
    localStorage.removeItem('subscriberId');
  }
}
