import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'magic-cards', component: CardsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
