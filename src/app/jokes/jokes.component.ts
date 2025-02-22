import { Component, OnInit } from '@angular/core';
import { IJoke } from '../interfaces/ijoke';
import { JokesService } from '../../services/jokes/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent  implements OnInit{

  jokes: IJoke[] = [];
  joke: IJoke|undefined;

  constructor(private jokeService: JokesService) {}

  ngOnInit() {
    this.jokeService.getAllJokes().subscribe(dataJokes => {
      this.jokes = dataJokes;
      // console.log(this.jokes);
    });
  }
}
