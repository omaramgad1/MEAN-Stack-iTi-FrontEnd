import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/app/Services/authors.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {
  id: string = "";
  data: any = {};
  books: any = [];
  constructor(private _AuthorsService: AuthorsService, private route: ActivatedRoute) {

    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getAuthorDetails()
  }


  getAuthorDetails() {
    this._AuthorsService.getAuthorById(this.id).subscribe((response) => {
      this.data = response.data;
    })
    this._AuthorsService.getAllBooksByAuthorId(this.id).subscribe((response) => {
      this.books = response.data;

    })


  }

}
