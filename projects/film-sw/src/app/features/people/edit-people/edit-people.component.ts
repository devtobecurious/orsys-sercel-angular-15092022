import { PeopleDto } from './../models/people';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  people: PeopleDto = { prenom: 'Anakin' };

  constructor() { }

  ngOnInit(): void {
  }

}
