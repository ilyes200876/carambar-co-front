import { Component } from '@angular/core';
import { IJoke } from '../interfaces/ijoke';
import { FormControl, FormGroup } from '@angular/forms';
import { JokesService } from '../../services/jokes/jokes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrl: './add-joke.component.css'
})
export class AddJokeComponent {

  jokes: IJoke[] = [];

  constructor(private jokeService: JokesService, private http: HttpClient,private router: Router) {}


  public formAdd: FormGroup = new FormGroup({
    question: new FormControl(''),
    response: new FormControl(''),
  })

  onSubmit(){
    if(this.formAdd.valid){
      let joke: IJoke = {
        id: 0,
        question: this.formAdd.value.question,
        response: this.formAdd.value.response
      }
      

      this.jokeService.createJoke(joke).subscribe(response => {
        // this.formAdd.reset();
        console.log(joke);
        this.jokes.push;
        this.router.navigate(['/blagues']);
      });
    }
  }

}
