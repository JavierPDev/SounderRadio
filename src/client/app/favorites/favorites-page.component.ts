import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  moduleId: module.id,
  selector: 'sp-favorites-page',
  templateUrl: 'favorites-page.component.html',
  styleUrls: ['favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  public favorites: any[];

  constructor(private _favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.favorites = this._favoritesService.getFavorites();
  }
}



