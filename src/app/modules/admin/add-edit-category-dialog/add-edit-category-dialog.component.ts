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
    categoryName: new FormControl(null, [Validators.required])
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

        if (this.onUpdate()) {

          this._CategoriesService.updateCategory(this.data.id, categoryForm.value).subscribe((res) => {

            this._coreService.openSnackBar('Category Name updated!');
            this._dialogRef.close(true)
          }, err => this._coreService.openSnackBar(err.message)
          )
        }
        else {
          this._coreService.openSnackBar('Nothing is updated!');
          this._dialogRef.close(true)

        }

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
  onUpdate(): boolean {
    let flg = false
    Object.keys(this.categoryForm.controls).forEach(key => {
      if (this.data[key] != this.categoryForm.get(key)?.value) {
        flg = true
      }

    });
    return flg
  }

  /*   onInsert(): string[] {
      let categoriesNames: string[] = []
  
  
      this._CategoriesService.geAllCategories().forEach(data => {
  
        [...data].forEach(cat => categoriesNames.push(cat.categoryName))
  
      })
  
      return categoriesNames;
  
    } */
}


