import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { HistoryPageComponent } from './history-page.component';

@NgModule({
  imports: [CommonModule, RouterModule, MomentModule],
  declarations: [HistoryPageComponent],
  exports: []
})
export class HistoryModule { }
