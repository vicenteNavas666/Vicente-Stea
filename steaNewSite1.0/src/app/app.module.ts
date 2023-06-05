import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SocietaComponent } from './societa/societa.component';
import { ServiziComponent } from './servizi/servizi.component';
import { DettaglioServiziComponent } from './dettaglio-servizi/dettaglio-servizi.component';
import { AboutComponent } from './about/about.component';
import { FirebaseApp } from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    SocietaComponent,
    ServiziComponent,
    DettaglioServiziComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
