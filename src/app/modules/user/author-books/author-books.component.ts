import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.scss']
})
export class AuthorBooksComponent implements OnInit {
  @Input() book: any = {};

  ngOnInit(): void {


  }



}
