import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CarouselModule } from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { KinisiologistsComponent} from './main/kinisiologists/kinisiologists.component';
import { BabsieComponent } from './kinesiologists/babsie/babsie.component';
import { MelinaComponent } from './kinesiologists/melina/melina.component';
import { WhatIsComponent } from './sessions/what-is/what-is.component';
import { TypesComponent } from './sessions/types/types.component';
import { BenefitsComponent } from './sessions/benefits/benefits.component';
import { FoodForLifeComponent } from './main/food-for-life/food-for-life.component';
import { JoinUsComponent } from './main/join-us/join-us.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { PricesComponent } from './main/prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KinisiologistsComponent,
    BabsieComponent,
    MelinaComponent,
    WhatIsComponent,
    TypesComponent,
    BenefitsComponent,
    FoodForLifeComponent,
    JoinUsComponent,
    FeedbackComponent,
    PricesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkGq2sp474Ilo7mN9jEHgg-xCbrNkbF7I'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
