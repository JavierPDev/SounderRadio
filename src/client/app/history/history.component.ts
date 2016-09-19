import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sp-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css'],
})

export class HistoryComponent implements OnInit, OnDestroy {
  private _cssClass: string = 'plain-background';
  public radioStations: any[];
  public songs: any[];

  constructor() {}

  ngOnInit() {
    document.body.classList.add(this._cssClass);
    this.radioStations = localStorage.radioHistory ?
      JSON.parse(localStorage.radioHistory) : [];
    this.songs = localStorage.songHistory ?
      JSON.parse(localStorage.songHistory) : [];
  }

  ngOnDestroy() {
    document.body.classList.remove(this._cssClass);
  }
}
