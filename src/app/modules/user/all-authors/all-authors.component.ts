import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthorsService } from 'src/app/Services/authors.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent {
  authorList!: Author[];
  currentPageIndex: number = 1;
  totalPages!: number;
  pageSize = 10;

  constructor(private _authors: AuthorsService){}

  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors() {
    this._authors.getAuthors(this.currentPageIndex,this.pageSize).subscribe({

      next: (res) => {
        this.authorList = res.data;

        this.totalPages = res.pages;
      },
      error: console.log
    })
  }

  handlePageEvent(e: PageEvent) {
    this.currentPageIndex = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getAuthors();
  }
}
