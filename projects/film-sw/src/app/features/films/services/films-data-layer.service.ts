import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'projects/film-sw/src/environments/apis';
import { Observable } from 'rxjs';
import { FilmDto } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsDataLayerService {

  constructor(private readonly client: HttpClient) { }

  getAll(): Observable<FilmDto[]> {
    return this.client.get<FilmDto[]>(apis.films.url);
  }
}
