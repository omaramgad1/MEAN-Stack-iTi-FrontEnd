import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { dialogData } from 'src/app/models/dialog';
import { AuthorsService } from 'src/app/Services/authors.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  myForm: FormGroup;
  authors!: Author[];
  up: boolean = false
  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Author, public fb: FormBuilder,
    private _authors: AuthorsService,
    private _dialogRef: MatDialogRef<DialogBodyComponent>) {

    this.myForm = this.fb.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      bio:new FormControl(null,[Validators.minLength(20) ,Validators.maxLength(150),Validators.required]),
      photo: new FormControl(null, [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.myForm.patchValue(this.data)
    console.log(this.data)
  }
  upload(event: Event) {
    const file = event.target as HTMLInputElement

    if (file.files) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.myForm.value.photo = event.target.result;

      }
      reader.readAsDataURL(file.files[0]);
      this.up = true
    }
  }
  onSubmit() {
    if (this.myForm.valid) {
      if (this.data) {
        this._authors.updateAnAuthor(this.data._id, this.myForm.value).subscribe({
          next: (val: Author) => {
            alert("Author's Info Updated Successfully");
            this._dialogRef.close(true);
          },
          error: (error) => {
            console.error(error)
          }
        });
      }
      else {
        this._authors.addAuthor(this.myForm.value).subscribe({
          next: (val: Author) => {
            alert("Author Added Successfully");
            this._dialogRef.close(true);
            // console.log(this.myForm.value.photo)

          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    }

  }
}


