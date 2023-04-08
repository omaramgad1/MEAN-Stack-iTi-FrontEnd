import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialogComponent } from '../photo-dialog/photo-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from 'src/app/Services/books.service';
import { UsersService } from 'src/app/Services/users.service';
import { CoreService } from 'src/app/Services/core.service';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  books!: Book[]
  searchKey!: string;

  displayedColumns: string[] = [
    'photo',
    'name',
    "author",
    'avgRate',
    'rating',
    'shelve',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _BooksService: BooksService,
    private _userService: UsersService,
    private _coreService: CoreService) {}

  ngOnInit(): void {
    this.getBooks()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSearchClear(event: Event) {
    this.searchKey = "";
    this.applyFilter(event)
  }

  getBooks() {
    this._userService.getUserBooks().subscribe((res) => {
      console.log(res.data);
      
      this.dataSource = new MatTableDataSource(res.data.books);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err)
    })
    
    // this._BooksService.geAllBooks().subscribe((res) => {
    //   this.dataSource = new MatTableDataSource(res.data)
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // }, err => {
    //   console.log(err)
    // })
  }

  getNextData(currentSize: number, offset: number, limit: number) {
    this._BooksService.getPageBooks(offset, limit)
      .subscribe((response: any) => {
        this.books.length = currentSize;
        this.books.push(...response.data);
        this.books.length = response.total;

        this.dataSource = new MatTableDataSource<any>(this.books);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
      })
  }

  openPopup(photoUrl: string) {
    this._dialog.open(PhotoDialogComponent, {
      data: { photoUrl }
    });
  }
}
