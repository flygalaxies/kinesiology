import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { CarouselModule } from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { KinisiologistsComponent} from './kinisiologists/kinisiologists.component';
import { BabsieComponent } from './babsie/babsie.component';
import { MelinaComponent } from './melina/melina.component';
import { WhatIsComponent } from "./what-is/what-is.component";
import { TypesComponent } from './types/types.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FoodForLifeComponent } from './food-for-life/food-for-life.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PricesComponent } from './prices/prices.component';

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
