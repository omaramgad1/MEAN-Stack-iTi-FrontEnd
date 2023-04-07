import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Guards/auth.guard';
import { RoleGuard } from './Guards/role.guard';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },

  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { allowedRoles: ['admin'] }
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/authnitaction/authnitaction.module').then(m => m.AuthnitactionModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { allowedRoles: ['user'] }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }