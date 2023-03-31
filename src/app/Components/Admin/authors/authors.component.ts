import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { dialogData } from 'src/app/models/dialog';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  dialog!:dialogData[]
constructor(public matDialog:MatDialog){}
openDialog(){
  const dialogRef= this.matDialog.open(DialogBodyComponent,{
 
    width:'400px',
    data:{
      formData:{}
    }
  });
}

}
