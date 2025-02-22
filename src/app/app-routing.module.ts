import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blagues', component: JokesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
