import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpectrumPageComponent } from './+spectrum-page/spectrum-page.component';
import { HomePageComponent } from './+home-page/home-page.component';
import { MixPageComponent } from './+mix-page/mix-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'spectrum', component: SpectrumPageComponent },
  { path: 'mixes', component: MixPageComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
