import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokesComponent } from './jokes/jokes.component';
import { HomeComponent } from './home/home.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { AddJokeComponent } from './add-joke/add-joke.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    JokesComponent,
    HomeComponent,
    RandomJokeComponent,
    JokeDetailsComponent,
    AddJokeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
