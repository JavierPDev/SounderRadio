import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import * as SoundcloudWidget from 'soundcloud-widget';

import { ControlTypes } from './radio-control-types.enum';
import { Keycodes } from './keycodes.enum';
import { SoundcloudService } from './soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sp-radio-player',
  templateUrl: 'radio-player.component.html',
  styleUrls: ['radio-player.component.css']
})
export class RadioPlayerComponent implements OnInit {
  @Input() radio;
  private _controlType: number = localStorage.controlType || ControlTypes.Simple;
  private _player: any;
  private _progressTimer: any;
  public ControlTypes = ControlTypes;
  public isPlaying: boolean = true;
  public song: any;
  public songProgressPercent: number = 0;
  public songProgressMs: number = 0;
  public volume: number = parseInt(localStorage.volume) || 50;

  constructor(private _soundcloudService: SoundcloudService,
             private _toasterService: ToasterService) {
  }

  ngOnInit() {
    // this._toasterService.pop('error', 'Title', 'Hello world!');
    // Initialize radio using chosen song
    this.song = this.radio;
    let url = `${this._soundcloudService.basePath}/${this.song.id}`;
    let options = { auto_play: true };
    this._player = new SoundcloudWidget('soundcloud');
    this._player.load(url, options)
      .then(() => {
        this._player.getCurrentSound().then(sound => this.song = sound);
        this.changeVolume(this.volume);
    ]));
    this._player.on(SoundcloudWidget.events.FINISH,
      () => console.log('FINISHED'));
    this._setProgressTimer();
    this._bindKeyboardShortcuts();
  }

  ngOnDestroy() {
    this._unbindKeyboardShortcuts();
  }

  private _bindKeyboardShortcuts(): void {
    document.addEventListener('keydown', this._keydownEventHandler, false);
  }

  private _keydownEventHandler = (event):void => {
    if (event.target.nodeName === 'BODY') {
      switch (event.keyCode) {
        case Keycodes.Spacebar:
          this.toggle();
          break;
        case Keycodes.UpArrow:
          this.changeVolume(this.volume + 10);
          break;
        case Keycodes.DownArrow:
          this.changeVolume(this.volume - 10);
        break;
      }
    }
  }

  private _setProgressTimer():void {
    this._progressTimer = setInterval(() => {
      this._player.getPosition()
        .then(pos => {
          this.songProgressPercent = pos / this.song.duration * 100;
          this.songProgressMs = pos;
        });
    }, 10);
  }

  private _unbindKeyboardShortcuts(): void {
    document.removeEventListener('keydown', this._keydownEventHandler, false);
  }

  private _unsetProgressTimer(): void {
    clearInterval(this._progressTimer);
  }

  public changeVolume(volume: number): void {
    if (volume < 0 || volume > 100) return;
    localStorage.volume = volume;
    this.volume = volume;
    this._player.setVolume(volume / 100);
  }

  public isControlTypeSetTo(controlType: number) {
    return this._controlType == controlType;
  }

  public setControlType(controlType: number): void {
    this._controlType = controlType;
    localStorage.controlType = controlType;
  }

  public toggle():void {
    this.isPlaying = !this.isPlaying;
    this._player.toggle();
    if (this.isPlaying) {
      this._setProgressTimer();
    } else {
      this._unsetProgressTimer();
    }
  }
}

