import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { SoundcloudService } from '../song/soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sp-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['radio.component.css']
})
export class RadioComponent implements OnInit {
  public radio: any;

  constructor(private _activatedRoute: ActivatedRoute, 
              private _soundcloudService: SoundcloudService,
              private _toasterService: ToasterService) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this._getInitialTrack(params.trackId);
    });
  }

  private _getInitialTrack(trackId: number):void {
    this._soundcloudService.getTrack(trackId)
      .subscribe(res => this.radio = res.json(), 
                 err => this._toasterService.pop('error', 'Error', err));
  }
}
