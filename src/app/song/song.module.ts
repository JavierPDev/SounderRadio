import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { DurationPipe } from './duration.pipe';
import { SearchBoxComponent } from './search-box.component';
import { SearchComponent } from './search.component';
import { SongCardComponent } from './song-card.component';
import { SoundcloudService } from './soundcloud.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MomentModule
  ],
  declarations: [
    SongCardComponent,
    SearchBoxComponent,
    SearchComponent,
    DurationPipe
  ],
  exports: [
    SongCardComponent,
    SearchBoxComponent,
    SearchComponent,
    DurationPipe
  ],
  providers: [SoundcloudService]
})
export class SongModule { }
