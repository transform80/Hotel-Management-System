import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BookingComponent } from './booking/booking.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StaffComponent } from './staff/staff.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { SuppliesCardComponent } from './supplies-card/supplies-card.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedinComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    RoomsComponent,
    BookingComponent,
    RestaurantComponent,
    InventoryComponent,
    StaffComponent,
    EmployeeCardComponent,
    RoomCardComponent,
    SuppliesCardComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
