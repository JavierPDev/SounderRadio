import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { FavoritesPageComponent } from './favorites-page.component';
import { FavoriteToggleComponent } from './favorite-toggle.component';
import { FavoritesService } from './favorites.service';

@NgModule({
  imports: [CommonModule, RouterModule, MomentModule],
  declarations: [
    FavoritesPageComponent,
    FavoriteToggleComponent
  ],
  exports: [
    FavoriteToggleComponent
  ],
  providers: [
    FavoritesService
  ]
})
export class FavoritesModule { }


