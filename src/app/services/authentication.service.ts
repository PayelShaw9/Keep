import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {

  }

  authenticateUser(data) :Observable<any>{
    return this.http.post<any>('http://localhost:3000/auth/v1/',data);

  }

  setBearerToken(token:string) {
    localStorage.setItem("token",token)

  }

  getBearerToken():string {
    return localStorage.getItem('token')
}

  isUserAuthenticated(token :string): Promise<boolean> {
    return this.http.post('http://localhost:3000/auth/v1/isAuthenticated',
    {},
    {
    headers:new HttpHeaders({
    Authorization: 'Bearer ${token}'
    })
    }
    ).pipe(map((response)=> response['isAuthenticated']
     )).toPromise();
  }


}
