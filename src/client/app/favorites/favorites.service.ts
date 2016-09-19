import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

  constructor() {
  }

  public getFavorites(): any[] {
    return localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
  }

  public saveFavorites(favorites: any[]): void {
    localStorage.favorites = JSON.stringify(favorites);
  }
}

