import { Component,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { dialogData } from 'src/app/models/dialog';
import { AuthorsService } from 'src/app/Services/authors.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {

  myForm: FormGroup;
  authors!:Author[];
  selectedImage!:string|null;
  public ImageUrl = "";

  constructor( public dialogRef:MatDialogRef<DialogBodyComponent>,@Inject(MAT_DIALOG_DATA) public data:dialogData,public fb:FormBuilder,private _authors:AuthorsService,private _dialogRef:DialogRef<DialogBodyComponent>){

  this.myForm = this.fb.group({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(null, [Validators.required]),
    photo: new FormControl(null, []),
  })
}
upload(event:Event){
  const file= event.target as HTMLInputElement

  if(file.files)
  {
    var reader= new FileReader();
    reader.onload = (event:any) => {
      this.ImageUrl = event.target.result;   
   }
    reader.readAsDataURL(file.files[0]);
    this.myForm.value.photo=this.ImageUrl;
  }
  }
onSubmit(){
  if(this.myForm.valid){
    this._authors.addAuthor(this.myForm.value).subscribe({
next:(val:Author)=>{
alert("Author Added Successfully");
this._dialogRef.close();
},
error:(error)=>{
  console.error(error)
}
    })
  }
}


}
