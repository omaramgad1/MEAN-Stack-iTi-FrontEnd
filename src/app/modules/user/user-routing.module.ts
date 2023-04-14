import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path:'categories',component:CategoriesComponent, canActivate :[AuthGuard] }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
