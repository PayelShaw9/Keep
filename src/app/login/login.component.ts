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
  submitMessage:string;

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
    set username(uname)
    {
      this.loginFrom.controls.username = uname;
    }
    get password():AbstractControl
    {
      return this.loginFrom.get('password');
    }
    set password(pass)
    {
      this.loginFrom.controls.password = pass;
    }


    loginSubmit() {

      this.auth.authenticateUser(this.loginFrom.value).subscribe(
        data=>
        {
        this.auth.setBearerToken(data.token);
         // console.log(data);
          this.routerService.routeToDashboard();
        },
        err=>
        {
          if (err.status === 403) {
            this.submitMessage = err.error.message;
          } else {
            this.submitMessage = err.message;
          }
        }

      );

    }
}
