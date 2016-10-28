import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './index';

@Component({
  moduleId: module.id,
  selector: 'sr-favorites',
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public favorites: any[];

  constructor(private _favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.favorites = this._favoritesService.getFavorites();
  }
}



