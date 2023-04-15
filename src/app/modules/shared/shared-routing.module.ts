import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeGuardGuard } from 'src/app/Guards/home-guard.guard';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: SharedComponent, children: [
      {
        path: 'home', component: HomeComponent, canActivate: [HomeGuardGuard],
      },
      { path: 'login', component: LoginComponent, canActivate: [HomeGuardGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [HomeGuardGuard] },
      {path:"**",component:NotFoundComponent}

    ]


  },




];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
