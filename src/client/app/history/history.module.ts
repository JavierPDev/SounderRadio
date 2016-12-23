import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { HistoryComponent } from './index';
import { HistoryService } from './history.service';

@NgModule({
  imports: [CommonModule, RouterModule, MomentModule],
  declarations: [HistoryComponent],
  exports: [],
  providers: [
    HistoryService
  ]
})
export class HistoryModule { }
