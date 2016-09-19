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
export class RadioPlayerComponent implements OnInit, OnDestroy {
  @Input() radio;
  private _controlType: number = localStorage.controlType || ControlTypes.Simple;
  private _defaultSongOptions: any = { auto_play: true };
  private _nextSongIndex: number = 0;
  private _player: any;
  private _progressTimer: any;
  private _songList: any[];
  public ControlTypes = ControlTypes;
  public playerHistory: any[] = [];
  public isPlaying: boolean = true;
  public song: any;
  public songProgressPercent: number = 0;
  public songProgressMs: number = 0;
  public volume: number = parseInt(localStorage.volume) || 50;

  constructor(private _soundcloudService: SoundcloudService,
             private _toasterService: ToasterService) {
  }

  ngOnInit() {
    // Initialize radio using chosen song
    this.song = this.radio;
    let url = `${this._soundcloudService.basePath}/${this.song.id}`;
    this._player = new SoundcloudWidget('soundcloud');
    this._player.load(url, this._defaultSongOptions)
      .then(() => {
        this._player.getCurrentSound().then(sound => this.song = sound);
        this.changeVolume(this.volume);
        this._getSongList();
        this._addRadioToHistory();
        this.playerHistory.push(this.song);
    });
    this._player.on(SoundcloudWidget.events.FINISH, () => {
      this._addSongToHistory();
      this.playNextSong();
    });
    this._setProgressTimer();
    this._bindKeyboardShortcuts();
  }

  ngOnDestroy() {
    this._unbindKeyboardShortcuts();
  }

  private _addRadioToHistory(): void {
    let radioHistory = localStorage.radioHistory ? 
      JSON.parse(localStorage.radioHistory) : [];
    let lastRadioStation = radioHistory[radioHistory.length - 1];
    // Don't save radio station if it was last played
    if (lastRadioStation && this.radio.id === lastRadioStation.id) return;
    radioHistory.push({
      title: this.radio.title,
      id: this.radio.id,
      artwork_url: this.radio.artwork_url,
      addedAt: new Date()
    });
    localStorage.radioHistory = JSON.stringify(radioHistory);
  }

  private _addSongToHistory(): void {
    let songHistory = localStorage.songHistory ? 
      JSON.parse(localStorage.songHistory) : [];
    // Tag with radio title for song history filtering
    this.song.radioStation = this.radio.title;
    songHistory.push({
      title: this.song.title,
      id: this.song.id,
      artwork_url: this.song.artwork_url,
      addedAt: new Date()
    });
    localStorage.songHistory = JSON.stringify(songHistory);
  }

  private _bindKeyboardShortcuts(): void {
    document.addEventListener('keydown', this._keydownEventHandler, false);
  }

  private _getSongList(): void {
    let searchBy = this.radio.genre || this.radio.tag_list;
    console.log('searching by', searchBy);
    this._soundcloudService.search(searchBy)
      .subscribe(res => {
        this._songList = this._soundcloudService.shuffleSongList(res.json());
      },
        err => this._toasterService.pop('error', 'Error', err));
  }

  private _keydownEventHandler = (event: any):void => {
    if (event.target.nodeName === 'BODY') {
      switch (event.keyCode) {
        case Keycodes.Spacebar:
          event.preventDefault();
          this.toggle();
          break;
        case Keycodes.UpArrow:
          event.preventDefault();
          this.changeVolume(this.volume + 10);
          break;
        case Keycodes.DownArrow:
          event.preventDefault();
          this.changeVolume(this.volume - 10);
        break;
        case Keycodes.RightArrow:
          event.preventDefault();
          this.playNextSong();
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
    if (volume < 0) volume = 0;
    if (volume > 100) volume = 100;
    localStorage.volume = volume;
    this.volume = volume;
    this._player.setVolume(volume / 100);
  }

  public isControlTypeSetTo(controlType: number) {
    return this._controlType == controlType;
  }

  public playNextSong = ():void => {
    let nextSong = this._songList[this._nextSongIndex];
    this._nextSongIndex++;
    this._player.load(nextSong.uri, this._defaultSongOptions)
      .then(() => {
        this.changeVolume(this.volume);
        this.songProgressMs = 0;
        this.songProgressPercent = 0;
        this.song = nextSong;
        this.isPlaying = true;
        this._toasterService.pop('', 'Now Playing', this.song.title);
        this.playerHistory.push(this.song);
      });
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

