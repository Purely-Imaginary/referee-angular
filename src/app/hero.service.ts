import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  test: 1;
  
  constructor() { }

  getHeroes(): Observable<Hero[]> { 
    return of(HEROES);
  }
}
