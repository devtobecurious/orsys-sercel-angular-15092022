import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'film-sw';

  ngOnInit(): void {
    console.info('000000000000000000000000');

    const promise = new Promise((resolve, reject) => {
      console.info('PROMISE - ETAPE 1');

      resolve('P: callback');
    }).then(item => console.info(item));

    const obs = new Observable(observer => {

      console.info('OBS - ETAPE 1');
      observer.next('O: callback');

      observer.complete();

      setTimeout(() => {
        observer.next('O: callback - 2');
      }, 0);

      console.info('OBS - FIN');
    });

    obs.subscribe(item => console.info(item),
      err => console.error(err),
      () => console.info('COMPLETE'));
    obs.subscribe();

    console.info('############################');
  }
}
