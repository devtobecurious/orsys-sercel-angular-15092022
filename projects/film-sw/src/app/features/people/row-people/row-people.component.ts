import { PeopleDto } from './../models/people';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-row-people[titre]',
  templateUrl: './row-people.component.html',
  styleUrls: ['./row-people.component.css']
})
export class RowPeopleComponent implements OnInit {
  @Input() people !: PeopleDto;
  @Output() demandeSuppression = new EventEmitter<PeopleDto>();

  private _titre = '';
  @Input() set titre(value: string) {
    if (value) {
      this._titre = value;
    }
  }

  get titre(): string {
    return this._titre;
  }

  constructor() { }

  ngOnInit(): void {
  }

  clickToSuppr(): void {
    this.demandeSuppression.emit(this.people);
  }

}
