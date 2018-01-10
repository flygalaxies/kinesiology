import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BabsieComponent } from '../app/main/kinisiologists/babsie/babsie.component';
import { MelinaComponent } from '../app/main/kinisiologists/melina/melina.component';
import { FoodForLifeComponent } from './main/food-for-life/food-for-life.component';
import { JoinUsComponent } from './main/join-us/join-us.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { PricesComponent } from './main/prices/prices.component';
import { DefinitionComponent } from '../app/main/home/definition/definition.component';
import { BenefitsComponent } from '../app/main/home/benefits/benefits.component';
import { TypesComponent } from '../app/main/home/types/types.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'define',
        component: DefinitionComponent,
        outlet: 'info',
      },
      {
        path: 'types',
        component: TypesComponent,
        outlet: 'info',        
      },
      {
        path: 'benefits',
        component: BenefitsComponent,
        outlet: 'info',
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
