import { Component, Input, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import * as SoundcloudWidget from 'soundcloud-widget';

import { ControlTypes, Keycodes } from './index';
import { SoundcloudService } from '../song/index';
import { HistoryService } from '../history/index';

@Component({
  moduleId: module.id,
  selector: 'sr-radio-player',
  templateUrl: 'radio-player.component.html',
  styleUrls: ['radio-player.component.css']
})
export class RadioPlayerComponent implements OnChanges, OnDestroy {
  @Input() radio;
  public ControlTypes = ControlTypes;
  public playerHistory: any[] = [];
  public isPlaying: boolean = true;
  public loading: boolean = false;
  public song: any;
  public songProgressPercent: number = 0;
  public songProgressMs: number = 0;
  public volume: number = parseInt(localStorage.volume) || 50;
  private _controlType: number = localStorage.controlType || ControlTypes.Simple;
  private _defaultSongOptions: any = { auto_play: false };
  private _nextSongIndex: number = 0;
  private _player: any;
  private _progressTimer: any;
  private _songList: any[];

  constructor(
    private _soundcloudService: SoundcloudService,
    private _historyService: HistoryService,
    private _renderer: Renderer2,
    private _toasterService: ToasterService
  ) {}

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
    const nextSong = this._songList[this._nextSongIndex];
    this._nextSongIndex++;
    this._player.pause();
    this.loading = true;

    this._player.load(nextSong.uri, this._defaultSongOptions)
      .then(() => {
        // Force reference change for history component's onChanges()
        // and put latest song first
        this.playerHistory = [this.song].concat(this.playerHistory);
        this.changeVolume(this.volume);
        this.loading = false;
        this._player.play();
        this.songProgressMs = 0;
        this.songProgressPercent = 0;
        this.song = nextSong;
        this.isPlaying = true;
        this._toasterService.pop('', 'Now Playing', this.song.title);
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

  ngOnChanges(changes) {
    this.loading = true;

    // Initialize the widget on component init, else pause player to await song
    if (!changes.radio.previousValue || !changes.radio.previousValue.id) {
      this._player = new SoundcloudWidget('soundcloud');
      this._bindKeyboardShortcuts();
    } else {
      this._player.pause();
      this.songProgressMs = 0;
      this.songProgressPercent = 0;
    }

    // Get initial radio and subsequent changed radios on same page navigation
    this.radio = changes.radio.currentValue;

    // Initialize radio using chosen song
    this.song = this.radio;

    const url = `${this._soundcloudService.basePath}/${this.song.id}`;

    this._player.load(url, this._defaultSongOptions)
      .then(() => {
        this._player.getCurrentSound().then(sound => this.song = sound);
        this.changeVolume(this.volume);
        this.loading = false;
        this._player.play();
        this._getSongList();
        this._historyService.addRadioToHistory(this.radio);
    });

    this._player.on(SoundcloudWidget.events.FINISH, () => {
      this._historyService.addSongToHistory(this.song, this.radio);
      this.playNextSong();
    });

    this._setProgressTimer();
  }

  ngOnDestroy() {
    // this._unbindKeyboardShortcuts();
  }

  private _bindKeyboardShortcuts(): void {
    this._renderer.listen(document, 'keydown', this._keydownEventHandler);
  }

  private _getSongList(): void {
    const searchBy = this.radio.genre || this.radio.tag_list;

    this._soundcloudService.search(searchBy)
      .subscribe(res => {
        this._songList = this._soundcloudService.shuffleSongList(res.json());
      },
        err => this._toasterService.pop('error', 'Error', err)
      );
  }

  private _keydownEventHandler = (event: any):void => {
    if (event.target.nodeName !== 'INPUT') {
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

  // private _unbindKeyboardShortcuts(): void {
  //   document.removeEventListener('keydown', this._keydownEventHandler, false);
  // }

  private _unsetProgressTimer(): void {
    clearInterval(this._progressTimer);
  }
}

