import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [

  { path: '', component: AdminComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'books', component: BooksComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
