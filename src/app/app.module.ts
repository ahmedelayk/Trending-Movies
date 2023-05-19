import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component' 
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    NavBarComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
