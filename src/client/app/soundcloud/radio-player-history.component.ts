import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sp-radio-player-history',
  templateUrl: 'radio-player-history.component.html',
  styleUrls: ['radio-player-history.component.css']
})
export class RadioPlayerHistoryComponent {
  @Input() songs;

  constructor() {
  }
}


