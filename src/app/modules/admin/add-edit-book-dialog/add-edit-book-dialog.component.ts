import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  categories: string[] = [];
  authors: any[] = [];

  bookForm = new FormGroup({

    bookName: new FormControl(null, [Validators.required]),
    categoryId: new FormControl(null, [Validators.required]),
    authorId: new FormControl(null, [Validators.required]),
    photo: new FormControl(null, []),


  })

  constructor(private _BooksService: BooksService,
    private _CategoriesService: CategoriesService,
    private _AuthorsService: AuthorsService,
    private _dialogRef: MatDialogRef<AddEditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {

  }

  ngOnInit(): void {
    this.bookForm.patchValue(this.data);

    this._CategoriesService.geAllCategories().subscribe((res) => {

      res.forEach((obj: any) => this.categories.push(obj.categoryName))
    })
    this._AuthorsService.getAllAuthors().subscribe((res) => {
      res.forEach((obj: any) => this.authors.push(obj.firstName))


    })
  }

  upload(event: Event) {
    const file = event.target as HTMLInputElement

    if (file.files) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.bookForm.value.photo = event.target.result;

      }
      reader.readAsDataURL(file.files[0]);
      this.up = true
    }
  }


  onFormSubmit(bookForm: FormGroup) {
    if (bookForm.valid) {
      if (this.data) {
        if (this.onUpdate()) {
          this._BooksService.updateBook(this.data.id, bookForm.value).subscribe((res) => {

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
        this._BooksService.addNewBook(bookForm.value).subscribe((res) => {

          this._coreService.openSnackBar('Book added successfully');
          this._dialogRef.close(true)
        }, err => console.log(err)
        )
      }

    }

  }

  onUpdate(): boolean {
    let flg = false
    Object.keys(this.bookForm.controls).forEach(key => {
      console.log(this.data[key]);
      console.log(this.bookForm.get(key)?.value);

      if (this.data[key] != this.bookForm.get(key)?.value) {
        flg = true
      }

    });
    return flg
  }

}
