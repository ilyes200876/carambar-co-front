import { Component } from '@angular/core';
import { IJoke } from '../interfaces/ijoke';
import { FormControl, FormGroup } from '@angular/forms';
import { JokesService } from '../../services/jokes/jokes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrl: './add-joke.component.css'
})
export class AddJokeComponent {

  jokes: IJoke[] = [];

  constructor(private jokeService: JokesService, private http: HttpClient) {}


  public formAdd: FormGroup = new FormGroup({
    question: new FormControl(''),
    response: new FormControl(''),
  })

  onSubmit(){
    if(this.formAdd.valid){
      let joke: IJoke = {
        
        question: this.formAdd.value.question,
        response: this.formAdd.value.response
      }
      console.log(joke);

      this.jokeService.createJoke(joke).subscribe(response => {
        this.formAdd.reset();
        this.jokes.push;
      });
    }
  }

}
