import { Component, Input, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sp-radio-player-history',
  templateUrl: 'radio-player-history.component.html',
  styleUrls: ['radio-player-history.component.css']
})
export class RadioPlayerHistoryComponent implements OnChanges {
  @Input() songs;

  constructor() {
  }
  
  ngOnChanges(changes) {
    // Order starting with last added and don't show current song
    this.songs = changes.songs.currentValue.reverse().slice(1);
  }
}
