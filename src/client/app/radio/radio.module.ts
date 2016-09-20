import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { FavoritesModule } from '../favorites/favorites.module';
import { SongModule } from '../song/song.module';
import {
  RadioComponent,
  RadioPlayerComponent,
  RadioPlayerHistoryComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MomentModule,
    FavoritesModule,
    SongModule
  ],
  declarations: [
    RadioComponent,
    RadioPlayerComponent,
    RadioPlayerHistoryComponent,
  ],
  exports: [
  ],
  providers: []
})
export class RadioModule { }
