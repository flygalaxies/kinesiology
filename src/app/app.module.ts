import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

//import { ModalModule } from 'ngx-bootstrap';
//import { AgmCoreModule } from '@agm/core';

//Modules
import { NavbarComponent } from '../app/main/navbar/navbar.component';
import { HomeComponent } from '../app/main/home/home.component';
import { KinisiologistsComponent } from '../app/main/kinisiologists/kinisiologists.component';
import { BabsieComponent } from '../app/main/kinisiologists/babsie/babsie.component';
import { MelinaComponent } from '../app/main/kinisiologists/melina/melina.component';
import { PricesComponent } from '../app/main/prices/prices.component';
import { JoinUsComponent } from '../app/main/join-us/join-us.component';
import { FeedbackComponent } from '../app/main/feedback/feedback.component';
import { FoodForLifeComponent } from '../app/main/food-for-life/food-for-life.component';
import { DefinitionComponent } from '../app/main/home/definition/definition.component';
import { BenefitsComponent } from '../app/main/home/benefits/benefits.component';
import { TypesComponent } from '../app/main/home/types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KinisiologistsComponent,
    BabsieComponent,
    MelinaComponent,
    PricesComponent,
    JoinUsComponent,
    FeedbackComponent,
    FoodForLifeComponent,
    DefinitionComponent,
    BenefitsComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Kinesiology-Practice' }),
    //ModalModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBkGq2sp474Ilo7mN9jEHgg-xCbrNkbF7I'
    // }),
    routing
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
