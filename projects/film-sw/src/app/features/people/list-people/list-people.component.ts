import { Observable } from 'rxjs';
import { PeopleService } from './../services/people.service';
import { Component, OnInit } from '@angular/core';
import { PeopleDto } from '../models/people';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  peopleObs$ !: Observable<PeopleDto[]>;

  constructor(private readonly service: PeopleService) { }

  ngOnInit(): void {
    this.peopleObs$ = this.service.getAll();
  }

  supprimerPeople(people: PeopleDto): void {
    console.info('suppresion', people);
  }

}
