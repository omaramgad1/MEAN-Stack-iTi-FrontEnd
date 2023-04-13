import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from 'src/app/Services/books.service';
import { CoreService } from 'src/app/Services/core.service';
import { AddEditBookDialogComponent } from '../add-edit-book-dialog/add-edit-book-dialog.component';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { Book } from 'src/app/models/book';
import { CategoriesService } from 'src/app/Services/categories.service';
CategoriesService
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books!: Book[]
  searchKey!: string;
  loading: boolean = true;
  currentPageIndex: number = 1;
  totalPages!: number;


  displayedColumns: string[] = [
    'counter',

    'bookName',
    'authorId',

    'categoryId',
    "action"

  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog: MatDialog,
    private _BooksService: BooksService,
    private _coreService: CoreService,
  ) {

  }

  ngOnInit(): void {
    this.getBooks()
  }


  /*   applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    onSearchClear(event: Event) {
      this.searchKey = "";
      this.applyFilter(event)
    } */



  openDialogform() {
    const dialogRef = this._dialog.open(AddEditBookDialogComponent, {

      minWidth: "50%",
      height: "auto",
      disableClose: true
    })


    dialogRef.afterClosed().subscribe((val) => {

      if (val)
        this.getBooks();


    })
  }

  getBooks() {
    this._BooksService.getPageBooks().subscribe((res) => {
      this.loading = false;
      this.totalPages = res.pages;
      this.currentPageIndex = res.currentPage;

      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err)
    }

    )

  }


  openEditForm(data: any) {

    const dialogRef = this._dialog.open(AddEditBookDialogComponent, {

      minWidth: "50%",
      height: "auto",
      data,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBooks();
        }
      },
    });
  }




  deleteBook(id: string) {

    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this._BooksService.deleteBook(id).subscribe({
          next: (res) => {

            this._coreService.openSnackBar('Book deleted!', 'done');
            this.getBooks();
          },
          error: console.log,
        });
      }
    });


  }


  onPreviousPage() {
    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this._BooksService.getPageBooks(this.currentPageIndex).subscribe((result) => {
        this.currentPageIndex = result.currentPage;
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
      this._BooksService.getPageBooks(this.currentPageIndex).subscribe((result) => {
        this.totalPages = result.pages;
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.paginator = this.paginator;
      });
    }
  }


}
