import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';

// rotas
const rotasApp: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'servicos', component: ServicosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     //registrar as rotas no Angular 
     RouterModule.forRoot(rotasApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }