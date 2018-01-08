import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BabsieComponent } from './kinesiologists/babsie/babsie.component';
import { MelinaComponent } from './kinesiologists/melina/melina.component';
import { WhatIsComponent } from './sessions/what-is/what-is.component';
import { TypesComponent } from './sessions/types/types.component';
import { BenefitsComponent } from './sessions/benefits/benefits.component';
import { FoodForLifeComponent } from './main/food-for-life/food-for-life.component';
import { JoinUsComponent } from './main/join-us/join-us.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { PricesComponent } from './main/prices/prices.component';

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
        outlet: 'info',
        data: {
          state : 'whatIs'
        }
      },
      {
        path: 'types',
        component: TypesComponent,
        outlet: 'info',
        data: {
          state : 'types'
        }
      },
      {
        path: 'benefits',
        component: BenefitsComponent,
        outlet: 'info',
        data: {
          state : 'benefits'
        }
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
  },
  {
    path: 'prices',
    component: PricesComponent,    
  },
  {
    path: '**',
    redirectTo: 'home'    
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
