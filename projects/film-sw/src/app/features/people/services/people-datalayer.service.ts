import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'projects/film-sw/src/environments/apis';
import { Observable, of } from 'rxjs';
import { PeopleDto } from '../models/people';

const fakeService = {
  getAll(): Observable<PeopleDto[]> {
    return of([{ prenom: 'Luke' }, { prenom: 'Leia' }]);
  }
}

export type OnePeopleResult = {
  name: string
}

export type PeopleResult = {
  results: OnePeopleResult[]
}

@Injectable({
  providedIn: 'root',
  // useValue: fakeService
  // useFactory: () => !environment.production ? fakeService
})
export class PeopleDatalayerService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<PeopleResult> {
    return this.http.get<PeopleResult>(apis.people.url);
  }
}
