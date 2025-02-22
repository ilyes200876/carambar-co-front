import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blagues', component: JokesComponent},
  {path: 'blagues/:id', component: JokeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
