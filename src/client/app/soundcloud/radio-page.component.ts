import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SoundcloudService } from './soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sp-radio-page',
  templateUrl: 'radio-page.component.html',
  styleUrls: ['radio-page.component.css']
})
export class RadioPageComponent implements OnInit {
  public radio: any;

  constructor(private _activatedRoute: ActivatedRoute, 
              private _soundcloudService: SoundcloudService) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this._getTrack(params.trackId);
    });
  }

  private _getTrack(trackId: number):void {
    this._soundcloudService.getTrack(trackId)
      .subscribe(res => this.radio = res.json(), err => console.log(err));
  }
}
