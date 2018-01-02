import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BabsieComponent} from './babsie/babsie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'babsiePage',
    component: BabsieComponent
  }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
