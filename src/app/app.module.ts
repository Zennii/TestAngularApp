import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SpectrumPageComponent } from './+spectrum-page/spectrum-page.component';
import { HomePageComponent } from './+home-page/home-page.component';
import { MixPageComponent } from './+mix-page/mix-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    SpectrumPageComponent,
    HomePageComponent,
    MixPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
