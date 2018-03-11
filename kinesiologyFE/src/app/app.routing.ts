import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent, KinesiologyComponent } from './Components/index';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'kinesiology', component: KinesiologyComponent },
    { path: '**', redirectTo: 'home' },
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);