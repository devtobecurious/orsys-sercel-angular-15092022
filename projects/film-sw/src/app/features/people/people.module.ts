import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule } from '@angular/forms';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { RowPeopleComponent } from './row-people/row-people.component';



@NgModule({
  declarations: [
    ListPeopleComponent,
    EditPeopleComponent,
    RowPeopleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule
  ],
  exports: [
    ListPeopleComponent
  ]
})
export class PeopleModule { }
