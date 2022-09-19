import { Observable, Subscription } from 'rxjs';
import { FilmsDataLayerService } from './../services/films-data-layer.service';
import { FilmDto } from './../models/film';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  titre = 'Mes films Star wars';;
  films: FilmDto[] = [{ titre: 'New Hope', annee: 1234 }, { titre: 'Empire contre attaque', annee: 1234 }];
  filmsObs$ !: Observable<FilmDto[]>;
  private subscription = new Subscription();

  constructor(private readonly dataLayer: FilmsDataLayerService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.filmsObs$ = this.dataLayer.getAll();

    const callback = (items: FilmDto[]) => { this.films = items; console.info(this.films); };
    const sub = this.filmsObs$.subscribe(callback);

    this.subscription.add(sub);
  }

  clickToAdd(): void {
    this.films.push({
      annee: 2000,
      titre: 'test'
    });
  }

  get hasFilms(): boolean {
    return this.films.length > 0;
  }

}
