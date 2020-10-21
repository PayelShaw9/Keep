import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router,private routerService:RouterService) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
    console.log('hi')
  }

  routeToLogin() {
    this.router.navigate(['login']);

  }
}
