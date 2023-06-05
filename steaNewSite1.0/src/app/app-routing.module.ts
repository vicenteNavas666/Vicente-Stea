import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SocietaComponent } from './societa/societa.component';
import { ServiziComponent } from './servizi/servizi.component';
import { DettaglioServiziComponent } from './dettaglio-servizi/dettaglio-servizi.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'home', component:HomeComponent },
  {path: 'societa', component: SocietaComponent},
  {path: 'servizi', component: ServiziComponent},
  {path: 'servizi/:id', component: DettaglioServiziComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
