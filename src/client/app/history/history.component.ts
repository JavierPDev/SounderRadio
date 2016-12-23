import { Component, OnInit } from '@angular/core';

import { HistoryService } from './history.service';

@Component({
  moduleId: module.id,
  selector: 'sr-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css'],
})
export class HistoryComponent implements OnInit {
  public radioStations: any[];
  public songs: any[];

  constructor(private _historyService: HistoryService) {}

  ngOnInit() {
    this.radioStations = this._historyService.getRadioHistory();
    this.songs = this._historyService.getSongHistory();
  }
}
