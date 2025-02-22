import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokesService } from '../../services/jokes/jokes.service';
import { IJoke } from '../interfaces/ijoke';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrl: './joke-details.component.css'
})
export class JokeDetailsComponent implements OnInit{
  joke: IJoke|undefined;


  constructor(private jokeService: JokesService, private route: ActivatedRoute){}

  ngOnInit():void {
    this.shownJokeById(1);
  }

  shownJokeById(id: number){
    this.route.params.subscribe(params => {
    this.jokeService.getJokeById(params['id']).subscribe(data => {
      this.joke = data;
    });
  });
  }
    
}
