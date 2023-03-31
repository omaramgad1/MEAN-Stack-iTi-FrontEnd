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
import { AuthorNavBarComponent } from './Components/Admin/author-nav-bar/author-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { DialogBodyComponent } from './Components/Admin/dialog-body/dialog-body.component';

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
    AuthorNavBarComponent,
    DialogBodyComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
