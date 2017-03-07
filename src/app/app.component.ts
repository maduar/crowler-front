import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';


import { Hero } from './hero';

import { HEROES } from './mock-heroes';

@Component({
    moduleId: module.id,
  selector: 'my-app',
  template: `
    <!--<h1>{{title}}</h1>-->
    <!--<nav>-->
      <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
      <!--<a routerLink="/heroes" routerLinkActive="active">Heroes</a>-->
    <!--</nav>-->
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
