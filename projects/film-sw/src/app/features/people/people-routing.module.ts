import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';

const routes: Routes = [
  {
    path: 'people',
    component: ListPeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
