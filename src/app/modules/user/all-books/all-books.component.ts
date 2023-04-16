import { Component } from '@angular/core';
import { BooksService } from 'src/app/Services/books.service';
import { Book } from 'src/app/models/book';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent {
  // books!: Book[]
  // currentPageIndex: number = 1;
  // totalPages!: number;

  books!: Book[]
  searchKey!: string;
  currentPageIndex: number = 0;
  totalPages!: number;
  pageSize: number = 10;
  dataLength!: number;

  constructor(private _BooksService: BooksService) { }


  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this._BooksService.getAllPagesBooks(this.currentPageIndex, this.pageSize).subscribe((res) => {
      this.books = res.data;
      this.totalPages = res.pages;
      this.currentPageIndex = res.currentPage;
      this.dataLength = res.data.Length;

    }, err => {
      console.log(err)
    }

    )
  }


  handlePageEvent(e: PageEvent) {
    this.currentPageIndex = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getBooks()
  }

}
