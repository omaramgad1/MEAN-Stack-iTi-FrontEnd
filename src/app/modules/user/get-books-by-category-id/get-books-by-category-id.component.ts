import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-get-books-by-category-id',
  templateUrl: './get-books-by-category-id.component.html',
  styleUrls: ['./get-books-by-category-id.component.scss']
})
export class GetBooksByCategoryIdComponent {
  books!: Book[];
  id!:number;
constructor(private catserv:CategoriesService,private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe(params=>this.getBooks(params['id']))
}

getBooks(id:number) {
  this.catserv.getBooksByCategoryId(id).subscribe((res) => {

    this.books = res.data;

  }, err => {
    console.log(err)
  }

  )
}
}
