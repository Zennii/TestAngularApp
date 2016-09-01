import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { spectrumPageComponent } from './+spectrum-page/spectrum-page.component';

const appRoutes: Routes = [
  { path: 'spectrum', component: spectrumPageComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
