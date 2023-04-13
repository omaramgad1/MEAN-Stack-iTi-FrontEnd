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
  file: any;
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
      bio: new FormControl(null, [Validators.minLength(20), Validators.maxLength(150), Validators.required]),
      photo: new FormControl(null),
    })

  }
  ngOnInit(): void {
    this.myForm.patchValue(this.data)
  }
  onFileSelect(event: any) {
    this.file = event.target.files

  };
  onSubmit(myForm: FormGroup) {
    const formData = new FormData();
    formData.append('firstName', myForm.get('firstName')?.value);
    formData.append('lastName', myForm.get('lastName')?.value);
    formData.append('dob', myForm.get('dob')?.value);
    formData.append('bio', myForm.get('bio')?.value);

    console.log(this.file);


    if (this.data) {
      if (this.file)
        formData.append('photo', this.file[0]);
      console.log(this.data);
      console.log(myForm.value);

      this._authors.updateAnAuthor(this.data._id, formData).subscribe({
        next: (val: any) => {


          alert("Author's Info Updated Successfully");
          this._dialogRef.close(true);
        },
        error: (error) => {
          console.error(error)
        }
      });
    }
    else {
      formData.append('photo', this.file[0]);

      this._authors.addAuthor(formData).subscribe({
        next: (val: Author) => {
          alert("Author Added Successfully");
          this._dialogRef.close(true);
        },
        error: (error) => {
          console.log(error)
        }
      })
    }

  }
}


