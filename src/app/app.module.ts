import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokesComponent } from './jokes/jokes.component';
import { HomeComponent } from './home/home.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    JokesComponent,
    HomeComponent,
    RandomJokeComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
