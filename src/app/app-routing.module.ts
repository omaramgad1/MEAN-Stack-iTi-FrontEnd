import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './Guards/auth.guard';
import { RoleGuard } from './Guards/role.guard';
import { HomeGuard } from './Guards/home.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'endless_books', pathMatch: 'full',
  },


  {
    path: 'endless_books',
    loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule),
    canActivate: [HomeGuard],

  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { allowedRoles: ['admin'] }
  },


  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard, RoleGuard],

    data: { allowedRoles: ['user'] }
  },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }