import { Component } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-joke-edit',
  templateUrl: './joke-edit.component.html',
  styleUrl: './joke-edit.component.css'
})
export class JokeEditComponent {

  constructor(private jokeService: JokesService,private route: ActivatedRoute,private router: Router) {}

  public formUpdate: FormGroup = new FormGroup({
    question: new FormControl(''),
    response: new FormControl('')
  })

  onSubmit (){
    this.jokeService.updateJoke(this.route.snapshot.params['id'], this.formUpdate.value).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/blagues']);
    })
  }

}
