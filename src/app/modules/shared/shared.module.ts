import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';


@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    MainNavbarComponent,
    MainFooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
