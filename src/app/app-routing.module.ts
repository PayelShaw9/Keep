import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { CanActivateRouteGuard } from './can-activate-route.guard';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate :[CanActivateRouteGuard ]},
  {path:'',redirectTo:'dashboard', pathMatch:'full'},

];

//route guard to privent insucure  acesss and guard is also used for popup
//msg for save

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule { }
