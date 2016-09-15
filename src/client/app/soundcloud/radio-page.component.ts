import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

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
