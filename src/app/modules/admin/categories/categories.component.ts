
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditCategoryDialogComponent } from '../add-edit-category-dialog/add-edit-category-dialog.component';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoreService } from 'src/app/Services/core.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { Category } from 'src/app/models/category';
/* import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  searchKey!: string;
  /*   categoris!: Category[]; */
  displayedColumns: string[] = [
    'id',
    'categoryName',
    "action"
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog: MatDialog,
    private _categoryService: CategoriesService,
    private _coreService: CoreService
  ) {

  }
  ngOnInit(): void {
    this.getCategories()
  }

  /*  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   } */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onSearchClear(event: Event) {
    this.searchKey = "";
    this.applyFilter(event)
  }
  getCategories() {
    this._categoryService.geAllCategories().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      /*       this.categoris = [...res];
            console.log(this.categoris)
            console.log(typeof (this.categoris)) */


    }, err => {
      console.log(err)
    }

    )


  }
  openDialogform(): void {
    const dialogRef = this._dialog.open(AddEditCategoryDialogComponent, {

      minWidth: "50%",
      height: "auto",
      disableClose: true
    })


    dialogRef.afterClosed().subscribe((val) => {

      if (val)
        this.getCategories();


    })

  }


  deleteCategory(id: number) {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this._categoryService.deleteCategory(id).subscribe({
          next: (res) => {

            this._coreService.openSnackBar('Category deleted!', 'done');
            this.getCategories();
          },
          error: console.log,
        });
      }
    });


  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditCategoryDialogComponent, {

      minWidth: "50%",
      height: "auto",
      data,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategories();
        }
      },
    });
  }



}


