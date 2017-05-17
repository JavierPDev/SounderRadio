import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { FavoritesModule } from '../favorites/index';
import { HistoryModule } from '../history/index';
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
    HistoryModule,
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
