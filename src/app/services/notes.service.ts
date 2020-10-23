import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {
  authToken:string;

  constructor(private httpClient:HttpClient, private authservice:AuthenticationService) {

  }

  getNotes(): Observable<Note[]> {
    this.authToken=this.authservice.getBearerToken();
    return this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`
      }),
    });

  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note);

  }

}
