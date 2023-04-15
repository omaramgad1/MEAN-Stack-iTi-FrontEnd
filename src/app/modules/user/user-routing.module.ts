import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { AllBooksComponent } from './all-books/all-books.component';
import { RoleGuard } from 'src/app/Guards/role.guard';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { GetBooksByCategoryIdComponent } from './get-books-by-category-id/get-books-by-category-id.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { UserViewComponent } from './user-view/user-view.component';
import { BooksComponent } from '../admin/books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {   path: '', component: UserComponent, children: [
      { path: 'dashboard', component: UserViewComponent },
=======
  { path: '', component: UserComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'books', component: AllBooksComponent },
  { path: 'authors', component: AllAuthorsComponent },
  { path: 'categories/:id', component: GetBooksByCategoryIdComponent },
  { path: "**", component: NotFoundComponent }
>>>>>>> 69e0384598076156cfb7450d8c58449d7ae5ac93

      { path: 'categories', component: CategoriesComponent },
      { path: 'books', component: AllBooksComponent },

      { path: 'authors', component: AllAuthorsComponent },
      { path: 'categories/:id', component: GetBooksByCategoryIdComponent },
      { path: 'books/:id', component: BookDetailsComponent },

    ]

  }

  // {
  //   path: 'user',
  //   redirectTo: '/user',
  //   pathMatch: 'full'
  // },

  // {
  //   path: '', component: UserComponent, children: [
  //     { path: 'user', component: UserComponent },
  //     // { path: '', component: UserComponent },
  //     { path:'categories',component:CategoriesComponent, canActivate :[AuthGuard]},
  //     { path:'books',component:AllBooksComponent, canActivate :[AuthGuard] }
  //   ]
  //   // ,
  //   // canActivate: [AuthGuard, RoleGuard],
  //   // data: { allowedRoles: ['user'] }
  // },
  // },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
