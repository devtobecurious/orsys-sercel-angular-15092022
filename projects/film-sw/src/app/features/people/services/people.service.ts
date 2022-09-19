import { PeopleDto } from './../models/people';
import { PeopleDatalayerService } from './people-datalayer.service';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly dataLayer: PeopleDatalayerService) { }

  getAll(): Observable<PeopleDto[]> {
    return this.dataLayer.getAll().pipe(
      map(result => result.results.map(item => ({ prenom: item.name }))),
      tap(items => console.info(items))
    );
  }
}
