import { FilmsDataLayerService } from './services/films-data-layer.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmsComponent } from './list-films/list-films.component';



@NgModule({
  declarations: [
    ListFilmsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    //  FilmsDataLayerService
  ],
  exports: [
    ListFilmsComponent
  ]
})
export class FilmsModule { }
