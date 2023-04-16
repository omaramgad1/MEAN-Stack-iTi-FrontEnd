import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/app/Services/authors.service';
import { BooksService } from 'src/app/Services/books.service';
import { CategoriesService } from 'src/app/Services/categories.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']

})
export class BookDetailsComponent {
  selected: string = "Read"
  select: boolean = true;
  rate: boolean = true;
  // public form: FormGroup;
  value: number = 5;
  id: string = '';
  book: any = {}
  authorName: string = ''
  categoryName: string = ''
  constructor(private fb: FormBuilder,
    private _UsersService: UsersService,
    private route: ActivatedRoute,
    private _BooksService: BooksService,
  ) {
    /*     
        this.form = this.fb.group({
          rating: ['', Validators.required],
        }) */
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.getBook(params['id']))
  }
  changeStatus() {
    this.select = !this.select
  }
  changeRate() {
    this.rate = !this.rate
  }
  updateStatus() {
    this._UsersService.updateShelve(this.id, this.selected).subscribe()
  }
  getBook(id: string) {
    this._BooksService.getBookById(id).subscribe((res) => {
      console.log(res.book);
      console.log(res.book.AuthorId);

      this.book = res.book;

    }, err => {
      console.log(err)
    })
    console.log(this.book);
    // console.log(this.book.AuthorId);
  }
  addToUser(book: any) {
    this._UsersService.addBookToUser(book._id, book.comment).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }
}
