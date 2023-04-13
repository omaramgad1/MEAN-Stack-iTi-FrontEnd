import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/Services/core.service';
import { AddEditCategoryDialogComponent } from '../add-edit-category-dialog/add-edit-category-dialog.component';
import { BooksService } from 'src/app/Services/books.service';
import { CategoriesService } from 'src/app/Services/categories.service';
import { AuthorsService } from 'src/app/Services/authors.service';
import { Category } from 'src/app/models/category';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-add-edit-book-dialog',
  templateUrl: './add-edit-book-dialog.component.html',
  styleUrls: ['./add-edit-book-dialog.component.scss']
})
export class AddEditBookDialogComponent {
  up: boolean = false
  categories: any[] = [];
  authors: any[] = [];
  file: any;
  bookForm: FormGroup;



  constructor(private _BooksService: BooksService,
    private _CategoriesService: CategoriesService,
    private _AuthorsService: AuthorsService,
    private _dialogRef: MatDialogRef<AddEditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private _coreService: CoreService) {
    this.bookForm = this.fb.group({

      name: new FormControl(null, [Validators.required]),
      categoryId: new FormControl(null, [Validators.required]),
      AuthorId: new FormControl(null, [Validators.required]),
      photo: new FormControl(null, []),


    })
  }

  ngOnInit(): void {
    this.bookForm.patchValue(this.data);

    this._CategoriesService.geAllCategories().subscribe((res) => {

      res.data.forEach((obj: any) => this.categories.push(obj))
    })
    this._AuthorsService.getAllAuthors().subscribe((res) => {



      res.data.forEach((obj: any) => this.authors.push(obj))


    })
  }

  onFileSelect(event: any) {
    this.file = event.target.files
    this.up = true
  };


  onFormSubmit(bookForm: FormGroup) {

    const formData = new FormData();

    formData.append('name', bookForm.get('name')?.value);
    formData.append('categoryId', bookForm.get('categoryId')?.value);
    formData.append('AuthorId', bookForm.get('AuthorId')?.value);
    formData.append('photo', this.file[0]);
    if (this.data) {
      if (this.onUpdate()) {
        this._BooksService.updateBook(this.data.id, formData).subscribe((res) => {

          this._coreService.openSnackBar('Book Data updated!');
          this._dialogRef.close(true)
        }, err => console.log(err)
        )
      }
      else {
        this._coreService.openSnackBar('Nothing is updated!');
        this._dialogRef.close(true)

      }

    }
    else {
      this._BooksService.addNewBook(formData).subscribe((res) => {

        this._coreService.openSnackBar('Book added successfully');
        this._dialogRef.close(true)
      }, err => console.log(err)
      )



    }


  }

  onUpdate(): boolean {
    let flg = false
    Object.keys(this.bookForm.controls).forEach(key => {

      if (this.data[key] != this.bookForm.get(key)?.value) {
        flg = true
      }

    });
    return flg
  }

}
