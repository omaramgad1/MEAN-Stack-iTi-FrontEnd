import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoreService } from 'src/app/Services/core.service';
@Component({
  selector: 'app-add-edit-category-dialog',
  templateUrl: './add-edit-category-dialog.component.html',
  styleUrls: ['./add-edit-category-dialog.component.scss']
})
export class AddEditCategoryDialogComponent {
  categoryForm = new FormGroup({
    name: new FormControl(null, [Validators.required])
  })
  // 
  constructor(private _CategoriesService: CategoriesService,
    private _dialogRef: MatDialogRef<AddEditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {

  }

  ngOnInit(): void {
    this.categoryForm.patchValue(this.data);
  }

  onFormSubmit(categoryForm: FormGroup) {
    if (categoryForm.valid) {
      if (this.data) {


        this._CategoriesService.updateCategory(this.data._id, categoryForm.value).subscribe((res) => {

          this._coreService.openSnackBar('Category Name updated!');
          this._dialogRef.close(true)
        }, err => this._coreService.openSnackBar(err.message)
        )

      }
      else {

        this._CategoriesService.addNewCategory(categoryForm.value).subscribe((res) => {

          this._coreService.openSnackBar('Category added successfully');
          this._dialogRef.close(true)
        }, err => this._coreService.openSnackBar(err.message)
        )

      }
    }
  }
  
}


