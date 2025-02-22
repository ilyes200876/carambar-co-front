import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { HttpClient } from '@angular/common/http';
import { IJoke } from '../interfaces/ijoke';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrl: './random-joke.component.css'
})
export class RandomJokeComponent {

  joke: IJoke|undefined;

  constructor(private jokeServive: JokesService, private route: ActivatedRoute) {}

  // ngOnInit(): void {}

  getRandomJoke() {
    this.jokeServive.getRandomJoke().subscribe(data => {
      this.joke = data;
      console.log(data);
    });
  }

  openModal(){
    const modalDiv = document.getElementById('jokeModal');

    if(modalDiv != null){
      modalDiv.style.display = 'block';
    }
  }

  closeModal(){
    const modalDiv = document.getElementById('jokeModal');

    if(modalDiv != null){
      modalDiv.style.display = 'none';
    }
  }


}
