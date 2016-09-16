import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sp-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css'],
})

export class HistoryComponent implements OnInit, OnDestroy {
  private _cssClass: string = 'plain-background';
  public radios: any[];
  public songs: any[];

  constructor() {}

  ngOnInit() {
    document.body.classList.add(this._cssClass);
    this.radios = JSON.parse(localStorage.radioHistory);
    this.songs = JSON.parse(localStorage.songHistory);
  }

  ngOnDestroy() {
    document.body.classList.remove(this._cssClass);
  }
}
