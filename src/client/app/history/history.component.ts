import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sp-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css'],
})

export class HistoryComponent implements OnInit {
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
