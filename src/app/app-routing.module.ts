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


const routes: Routes = [

  { path: '',  canActivate:[],component:LoggedinComponent},
    { path: 'login', component:LoginComponent},
    { path: 'rooms', component:RoomsComponent,canActivate:[AuthGuard]},
    { path: 'booking', component:BookingComponent,canActivate:[AuthGuard]},
    { path: 'staff', component:StaffComponent,canActivate:[AuthGuard]},
    { path: 'inventory', component:InventoryComponent,canActivate:[AuthGuard]},
    { path: 'restaurant', component:RestaurantComponent,canActivate:[AuthGuard]},

    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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
