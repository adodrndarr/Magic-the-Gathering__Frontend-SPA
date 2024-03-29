import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './shared/error/error.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MagicCardComponent } from './cards-page/magic-card/magic-card.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorComponent,
    LoadingSpinnerComponent,
    CardsPageComponent,
    MagicCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
