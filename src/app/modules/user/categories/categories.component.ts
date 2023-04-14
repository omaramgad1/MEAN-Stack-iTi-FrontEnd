import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categoryList!: Category[];
  currentPageIndex: number = 1;
  totalPages!: number;
  pageSize = 10;
  constructor(private _categoryService: CategoriesService) {

  }

  ngOnInit(): void {
    this.getCategory(1, 10);
  }
  getCategory(currentPageIndex: number, pageSize: number) {
    this._categoryService.getCategories(this.currentPageIndex, this.pageSize).subscribe((res) => {
      this.categoryList = res.data;
      this.totalPages = res.pages;

    }, err => {
      console.log(err)
    }
    )
  }

  // onPreviousPage() {
  //   if (this.currentPageIndex > 1) {
  //     this.currentPageIndex--;
  //     this._categoryService.getPageCategories(this.currentPageIndex, 5).subscribe((result) => {
  //       this.currentPageIndex = result.currentPage;
  //       this.totalPages = result.pages;
  //     });
  //   }
  // }

  // onNextPage() {
  //   if (this.currentPageIndex < this.totalPages) {
  //     this.currentPageIndex++;
  //     console.log(this.currentPageIndex)
  //     this._categoryService.getPageCategories(this.currentPageIndex, 5).subscribe((result) => {
  //       this.totalPages = result.pages;

  //     });
  //   }
  // }

  handlePageEvent(e: PageEvent) {
    this.currentPageIndex = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCategory(1, 10);
  }
}
