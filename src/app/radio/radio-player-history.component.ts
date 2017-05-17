import { Component, Input, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sr-radio-player-history',
  templateUrl: 'radio-player-history.component.html',
  styleUrls: ['radio-player-history.component.css']
})
export class RadioPlayerHistoryComponent implements OnChanges {
  @Input() songs;

  constructor() {
  }
  
  ngOnChanges(changes) {
    this.songs = changes.songs.currentValue;
  }
}
