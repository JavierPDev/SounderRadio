import { Component, Input, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  moduleId: module.id,
  selector: 'sp-favorite-toggle',
  templateUrl: 'favorite-toggle.component.html',
  styleUrls: ['favorite-toggle.component.css']
})
export class FavoriteToggleComponent implements OnInit {
  public isFavorite: boolean;
  @Input() radio;

  constructor(private _favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.isFavorite = this._getIsFavorite();
  }

  private _getIsFavorite(): boolean {
    let isFavorite = false;
    let favorites = this._favoritesService.getFavorites();
    if (!favorites.length) return false;
    for (let i = 0, l = favorites.length; i < l; i++) {
      if (favorites[i].id === this.radio.id) {
        isFavorite = true;
        break;
      }
    }
    return isFavorite;
  }

  public addToFavorites(): void {
    let favorites = this._favoritesService.getFavorites();
    favorites.push({
      title: this.radio.title,
      id: this.radio.id,
      artwork_url: this.radio.artwork_url,
      addedAt: new Date()
    });
    this._favoritesService.saveFavorites(favorites);
    this.isFavorite = true;
  }

  public removeFromFavorites(): void {
    let favorites = this._favoritesService.getFavorites();
    favorites.forEach((favorite, index) => {
      if (favorite.id === this.radio.id) {
        favorites.splice(index, 1);
        this._favoritesService.saveFavorites(favorites);
        this.isFavorite = false;
        return;
      }
    });
  }
}


