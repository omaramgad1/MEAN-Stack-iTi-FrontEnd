import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthnitactionRoutingModule } from './authnitaction-routing.module';
import { AuthnitactionComponent } from './authnitaction.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AuthnitactionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthnitactionRoutingModule,
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
  ],
  providers: [CookieService
  ]
})
export class AuthnitactionModule { }
