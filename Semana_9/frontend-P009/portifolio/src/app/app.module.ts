import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    App3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
