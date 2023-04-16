import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserViewComponent } from './user-view/user-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { GetBooksByCategoryIdComponent } from './get-books-by-category-id/get-books-by-category-id.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorBooksComponent } from './author-books/author-books.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    UserViewComponent,
    PhotoDialogComponent,
    CategoriesComponent,
    UserFooterComponent,
    AllBooksComponent,
    AllAuthorsComponent,
    GetBooksByCategoryIdComponent,
    AuthorDetailsComponent,
    AuthorBooksComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class UserModule { }
