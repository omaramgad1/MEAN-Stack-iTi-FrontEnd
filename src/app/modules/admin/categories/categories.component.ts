
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditCategoryDialogComponent } from '../add-edit-category-dialog/add-edit-category-dialog.component';
import { CategoriesService } from 'src/app/Services/categories.service';
import { CoreService } from 'src/app/Services/core.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  searchKey!: string;
  categoris!: Category[];
  loading: boolean = true;
  currentPageIndex: number = 0;
  totalPages!: number;


  displayedColumns: string[] = [
    'counter',
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
    this.getCategories(0, 5)
  }


  getCategories(pageNumber: number, pageSize: number) {
    this._categoryService.getPageCategories(pageNumber, pageSize).subscribe((res) => {
      this.loading = false;
      this.categoris = res.data
      this.totalPages = res.pages;
      this.dataSource = new MatTableDataSource(this.categoris)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;



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
        this.getCategories(1, 10);


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
            this.getCategories(1, 10);
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
          this.getCategories(1, 10);
        }
      },
    });
  }

  onPreviousPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this._categoryService.getPageCategories(this.currentPageIndex, 5).subscribe((result) => {
        // this.currentPageIndex = result.currentPage;
        this.totalPages = result.pages;
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  onNextPage() {
    if (this.currentPageIndex < this.totalPages) {
      this.currentPageIndex++;
      console.log(this.currentPageIndex)
      this._categoryService.getPageCategories(this.currentPageIndex, 5).subscribe((result) => {
        this.totalPages = result.pages;
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.paginator = this.paginator;
      });
    }
  }
}


