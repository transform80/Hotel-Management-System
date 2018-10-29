import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BookingComponent } from './booking/booking.component';
import { StaffComponent } from './staff/staff.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';


const routes: Routes = [

    { path: '',  canActivate:[AuthGuard],component:BookingComponent},
    { path: 'rooms', component:RoomsComponent,canActivate:[AuthGuard]},
    { path: 'staff', component:StaffComponent,canActivate:[AuthGuard]},
    { path: 'supplies', component:InventoryComponent,canActivate:[AuthGuard]},
    { path: 'restaurant', component:RestaurantComponent,canActivate:[AuthGuard]},
    { path: 'employee_test', component:EmployeeCardComponent,canActivate:[AuthGuard]},
    { path: 'restaurant_card_test', component:RestaurantCardComponent,canActivate:[AuthGuard]},
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoggedinComponent,
  RoomsComponent,
  BookingComponent,
  StaffComponent,
  InventoryComponent,
  RestaurantComponent
];
