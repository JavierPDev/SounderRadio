import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { SongCardComponent } from './song-card.component';
import { SearchComponent } from './search.component';
import { SearchPageComponent } from './search-page.component';
import { RadioPageComponent } from './radio-page.component';
import { RadioPlayerComponent } from './radio-player.component';
import { SoundcloudService } from './soundcloud.service';
import { DurationPipe } from './duration.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MomentModule],
  declarations: [
    SongCardComponent,
    SearchComponent,
    SearchPageComponent,
    RadioPageComponent,
    RadioPlayerComponent,
    DurationPipe
  ],
  exports: [
    SongCardComponent,
    SearchComponent,
    SearchPageComponent
  ],
  providers: [SoundcloudService]
})
export class SoundcloudModule { }

