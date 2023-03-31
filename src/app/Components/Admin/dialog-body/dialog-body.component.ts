import { Component,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { dialogData } from 'src/app/models/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {

  myForm: FormGroup;
  authors!:Author[];
  constructor( public dialogRef:MatDialogRef<DialogBodyComponent>,@Inject(MAT_DIALOG_DATA) public data:dialogData,public fb:FormBuilder){

  this.myForm = this.fb.group({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    photo: new FormControl(null, []),
    dateOfBirth: new FormControl(null, [Validators.required])
  })
}
onSubmit(){
console.log(this.myForm.value)
}
addAuthor(){
  
}
upload(event:Event){
  console.log(event)
}
}
