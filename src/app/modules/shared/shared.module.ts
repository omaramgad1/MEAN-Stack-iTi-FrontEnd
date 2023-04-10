import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import { LoginComponent } from '../shared/login/login.component';
import { RegisterComponent } from '../shared/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './home/home.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
@NgModule({
  declarations: [
    SharedComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainNavbarComponent,
    MainFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
