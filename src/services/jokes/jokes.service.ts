import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getJokeById() {

  }

  getRandomJoke() {

  }

  createJoke() {

  }
}
