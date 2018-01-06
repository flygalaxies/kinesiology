import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BabsieComponent } from './babsie/babsie.component';
import { MelinaComponent } from './melina/melina.component';
import { WhatIsComponent } from 'app/what-is/what-is.component';
import { TypesComponent } from './types/types.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FoodForLifeComponent } from './food-for-life/food-for-life.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FeedbackComponent } from './feedback/feedback.component';

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
    path: 'babsiePage',
    component: BabsieComponent
  },
  {
    path: 'melinaPage',
    component: MelinaComponent
  },
  {
    path: 'foodForLife',
    component: FoodForLifeComponent
  },
  {
    path: 'joinUs',
    component: JoinUsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
