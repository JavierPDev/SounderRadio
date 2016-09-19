import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sp-history-page',
  templateUrl: 'history-page.component.html',
  styleUrls: ['history-page.component.css'],
})

export class HistoryPageComponent implements OnInit {
  public radioStations: any[];
  public songs: any[];

  constructor() {}

  ngOnInit() {
    this.radioStations = localStorage.radioHistory ?
      JSON.parse(localStorage.radioHistory) : [];
    this.songs = localStorage.songHistory ?
      JSON.parse(localStorage.songHistory) : [];
  }
}
