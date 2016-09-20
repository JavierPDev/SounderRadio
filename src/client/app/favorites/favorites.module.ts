import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import {
  FavoritesComponent,
  FavoriteToggleComponent,
  FavoritesService
} from './index';

@NgModule({
  imports: [CommonModule, RouterModule, MomentModule],
  declarations: [
    FavoritesComponent,
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


