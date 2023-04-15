import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { RoleGuard } from 'src/app/Guards/role.guard';
import { AuthGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '', component: AdminComponent, children: [
      { path: 'home', component: HomeComponent },

      { path: 'categories', component: CategoriesComponent },
      { path: 'books', component: BooksComponent },
      { path: 'authors', component: AuthorsComponent }
    ]
    ,
    // canActivate: [AuthGuard, RoleGuard],
    data: { allowedRoles: ['admin'] }
  },





];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
