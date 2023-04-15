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
  dataLength!:number;
  constructor(private _categoryService: CategoriesService) {

  }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this._categoryService.getCategories(this.currentPageIndex, this.pageSize).subscribe((res) => {
      this.categoryList = res.data;
      this.dataLength=res.data.Length;
      this.totalPages = res.pages;

    }, err => {
      console.log(err)
    }
    )
  }
  // this.dataLength=this.getCategory().length;

  handlePageEvent(e: PageEvent) {
    this.currentPageIndex = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCategory();
  }

}
