import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import {NotesService} from '../services/notes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    constructor(private noteService:NotesService){

  }

  note:Note=new Note();
  notes:Note[]=[];

  ngOnInit()
  {
    this.noteService.getNotes().subscribe(data=>
    {
     // console.log(data);
      this.notes=data;
    },error=>
      {
        console.log(error);
      }

    );
  }


  takeNote()
  {
   this.noteService.addNote(this.note).subscribe(
      data=>{  this.notes.concat(data)},
      error=>{console.log(error)}
    );
  }

}
