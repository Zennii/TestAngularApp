import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpectPageComponent }  from './spectpage/spectpage.component';

const appRoutes: Routes = [
  { path: 'spectrum', component: SpectPageComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
