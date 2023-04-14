import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEditCategoryDialogComponent } from './add-edit-category-dialog/add-edit-category-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AuthorsComponent } from './authors/authors.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { AddEditBookDialogComponent } from './add-edit-book-dialog/add-edit-book-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselComponent } from '../admin/carousel/carousel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    BooksComponent,
    NavbarComponent,
    AddEditCategoryDialogComponent,
    ConfirmDialogComponent,
    AuthorsComponent,
    DialogBodyComponent,
    AddEditBookDialogComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatSortModule,
    MatProgressSpinnerModule

  ]
})
export class AdminModule { }
