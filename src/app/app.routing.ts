import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BabsieComponent } from './babsie/babsie.component';
import { MelinaComponent } from './melina/melina.component';
import { WhatIsComponent } from 'app/what-is/what-is.component';
import { TypesComponent } from './types/types.component';
import { BenefitsComponent } from './benefits/benefits.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'whatIs',
        component: WhatIsComponent,
        outlet: 'info'
      },
      {
        path: 'types',
        component: TypesComponent,
        outlet: 'info'
      },
      {
        path: 'benefits',
        component: BenefitsComponent,
        outlet: 'info'
      }
    ]
  },
  {
    path: 'melinaPage',
    component: MelinaComponent
  }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
