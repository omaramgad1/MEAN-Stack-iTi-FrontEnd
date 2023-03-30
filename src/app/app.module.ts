import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './Components/Admin/categories/categories.component';
import { BooksComponent } from './Components/Admin/books/books.component';
import { AuthorsComponent } from './Components/Admin/authors/authors.component';
import { BookComponent } from './Components/Admin/book/book.component';
import { AuthorComponent } from './Components/Admin/author/author.component';
import { CategoryComponent } from './Components/Admin/category/category.component';
import { PanelComponent } from './Components/Admin/panel/panel.component';
import { NavbarComponent } from './Components/Admin/navbar/navbar.component';
import { FooterComponent } from './Components/Admin/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BooksComponent,
    AuthorsComponent,
    BookComponent,
    AuthorComponent,
    CategoryComponent,
    PanelComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
