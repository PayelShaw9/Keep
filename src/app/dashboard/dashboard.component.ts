import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import {NotesService} from '../services/notes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  note:Note = new Note();
  notes:Note[] = [];

  errMessage= "";

    constructor(private noteService:NotesService){

  }



  ngOnInit()
  {
    this.noteService.getNotes().subscribe(data=>
    {
     // console.log(data);
      this.notes=data;
    },error=>
      {
        this.errMessage=error;
      }

    )
  }


  takeNote()
  {
  if(!this.note.title ) {
    this .errMessage = "Title and Text both are required fields";
   // return errorMessage;
   }
   else if(!this.note.text ) {
    this .errMessage = "Title and Text both are required fields";
   // return errorMessage;
   }
   else
   {

   this.noteService.addNote(this.note).subscribe(
      data=>{  this.notes.push(data)},
      error=>{console.log(error)}
    );
  }
}

}
