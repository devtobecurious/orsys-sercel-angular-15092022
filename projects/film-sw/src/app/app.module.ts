import { FilmsModule } from './features/films/films.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/ui/components/menu/menu.component';
import { PeopleModule } from './features/people/people.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FilmsModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
