import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialogComponent } from '../photo-dialog/photo-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from 'src/app/Services/books.service';
import { UsersService } from 'src/app/Services/users.service';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit{
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
  @Output() ratingChange = new EventEmitter<number>();
  stars: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _BooksService: BooksService,
    private _userService: UsersService,private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.getBooks();
    this.stars = Array(5).fill(null).map(() => ({ filled: false, hover: false }));
  }

  createStars(rating: number) {
    const stars = Array(5).fill(null).map(() => ({ filled: false, hover: false }));
    const roundedRating = Math.round(rating);
    for (let i = 0; i < roundedRating; i++) {
      stars[i].filled = true;
    }
    return stars;
  }

  onStarHover(row: any, star: any) {
    const index = row.stars.indexOf(star);
    for (let i = 0; i <= index; i++) {
      row.stars[i].hover = true;
    }
  }

  onStarLeave(row: any, star: any) {
    const index = row.stars.indexOf(star);
    for (let i = 0; i <= index; i++) {
      row.stars[i].hover = false;
    }
  }

  onStarClick(row: any, star: any) {
    const index = row.stars.indexOf(star);
    const newRating = index + 1;
    row.rating = newRating;
    row.stars = this.createStars(newRating);
    this.dataSource._updateChangeSubscription();
    this.ratingChange.emit(newRating);
  }

  getBooks() {
    this._userService.getUserBooks().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.data.books);
      this.dataSource.data.forEach((row: any) => {
        row.stars = this.createStars(row.rating);
      });
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err)
    })
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
