import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthenticationService,private routerService:RouterService) { }

  ngOnInit(): void {
  }
  loginFrom=new FormGroup({
   username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
    });

    get username():AbstractControl
    {
      return this.loginFrom.get('username');
    }

    loginSubmit() {

      this.auth.authenticateUser(this.loginFrom.value).subscribe(
        data=>
        {
        this.auth.setBearerToken(data.token);
          console.log(data);
          this.routerService.routeToDashboard();
        },
        err=>
        {
          console.log(err);
        }

      );

    }
}
