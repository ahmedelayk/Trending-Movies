import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : 'register', component:RegisterComponent},
  {path : 'moviedetail/:id', component:MovieDetailsComponent},
  {path : '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
