import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { urlApi } from '../../app/environmental/environmental';
import { IJoke } from '../../app/interfaces/ijoke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  urlJokes = urlApi + "/blagues";

  constructor( private http: HttpClient) { }

  getAllJokes() {
    return this.http.get<IJoke[]>(this.urlJokes);
  }

  getJokeById(id: number) {
    return this.http.get<IJoke>(this.urlJokes + "/" +id);
  }

  getRandomJoke() {
    return this.http.get<IJoke>(this.urlJokes + "/random/");   
  }

  createJoke(joke: IJoke) {
    let body = JSON.stringify(joke);
    let header = { 'content-type': 'application/json'};
    return this.http.post<IJoke>(urlApi + "/createJoke", body, {'headers': header})
    .pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      })
    );

  }

  deleteJoke(id:number) {
    return this.http.delete(this.urlJokes + "/delete/" + id);
  }
}
