import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sr-song-card',
  templateUrl: 'song-card.component.html',
  styleUrls: ['song-card.component.css']
})
export class SongCardComponent {
  @Input() song: any;
  @Input() searchTerm: string;

  constructor(private _router: Router) {}

  public playRadio() {
    this._router.navigate(['radio', this.song.id]);
  }
}

