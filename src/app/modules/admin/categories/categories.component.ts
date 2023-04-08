
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
    this.getCategories(1, 5)
  }


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

  getCategories(pageNumber: number, pageSize: number) {
    this._categoryService.getPageCategories(pageNumber, pageSize).subscribe((res) => {
      this.loading = false;
      this.categoris = res.data
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

  getNextData(currentSize: number, offset: number, limit: number) {


    this._categoryService.getPageCategories(offset, limit)
      .subscribe((response: any) => {
        this.loading = false;
        this.categoris.length = currentSize;


        this.categoris.push(...response.data);

        this.categoris.length = response.total;



        this.dataSource = new MatTableDataSource<any>(this.categoris);
        this.dataSource._updateChangeSubscription();

        this.dataSource.paginator = this.paginator;

      })
  }


  onPageChange(event: PageEvent) {
    this.loading = true;
    console.log(event);


    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;

    //let previousIndex = event.previousPageIndex;

    let previousSize = pageSize * pageIndex;

    this.getNextData(previousSize, pageIndex, pageSize);


  }


}


