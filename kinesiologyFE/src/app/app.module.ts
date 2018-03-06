import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'Kinesiology-Practice'}),
    routing
  ],
  providers: [
    {provide: 'isBrowser', useValue: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
