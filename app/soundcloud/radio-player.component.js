"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var SoundcloudWidget = require('soundcloud-widget');
var radio_control_types_enum_1 = require('./radio-control-types.enum');
var keycodes_enum_1 = require('./keycodes.enum');
var soundcloud_service_1 = require('./soundcloud.service');
var RadioPlayerComponent = (function () {
    function RadioPlayerComponent(_soundcloudService, _toasterService) {
        var _this = this;
        this._soundcloudService = _soundcloudService;
        this._toasterService = _toasterService;
        this._controlType = localStorage.controlType || radio_control_types_enum_1.ControlTypes.Simple;
        this._defaultSongOptions = { auto_play: true };
        this._nextSongIndex = 0;
        this.ControlTypes = radio_control_types_enum_1.ControlTypes;
        this.isPlaying = true;
        this.songProgressPercent = 0;
        this.songProgressMs = 0;
        this.volume = parseInt(localStorage.volume) || 50;
        this._keydownEventHandler = function (event) {
            if (event.target.nodeName === 'BODY') {
                switch (event.keyCode) {
                    case keycodes_enum_1.Keycodes.Spacebar:
                        event.preventDefault();
                        _this.toggle();
                        break;
                    case keycodes_enum_1.Keycodes.UpArrow:
                        event.preventDefault();
                        _this.changeVolume(_this.volume + 10);
                        break;
                    case keycodes_enum_1.Keycodes.DownArrow:
                        event.preventDefault();
                        _this.changeVolume(_this.volume - 10);
                        break;
                    case keycodes_enum_1.Keycodes.RightArrow:
                        event.preventDefault();
                        _this.playNextSong();
                        break;
                }
            }
        };
        this.playNextSong = function () {
            var nextSong = _this._songList[_this._nextSongIndex];
            _this._nextSongIndex++;
            _this._player.load(nextSong.uri, _this._defaultSongOptions)
                .then(function () {
                _this.changeVolume(_this.volume);
                _this.song = nextSong;
                _this._toasterService.pop('', 'Now Playing', _this.song.title);
            });
        };
    }
    RadioPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.song = this.radio;
        var url = this._soundcloudService.basePath + "/" + this.song.id;
        this._player = new SoundcloudWidget('soundcloud');
        this._player.load(url, this._defaultSongOptions)
            .then(function () {
            _this._player.getCurrentSound().then(function (sound) { return _this.song = sound; });
            _this.changeVolume(_this.volume);
            _this._getSongList();
        });
        this._player.on(SoundcloudWidget.events.FINISH, this.playNextSong);
        this._setProgressTimer();
        this._bindKeyboardShortcuts();
    };
    RadioPlayerComponent.prototype.ngOnDestroy = function () {
        this._unbindKeyboardShortcuts();
    };
    RadioPlayerComponent.prototype._bindKeyboardShortcuts = function () {
        document.addEventListener('keydown', this._keydownEventHandler, false);
    };
    RadioPlayerComponent.prototype._getSongList = function () {
        var _this = this;
        var searchBy = this.radio.genre || this.radio.tag_list;
        console.log('searching by', searchBy);
        this._soundcloudService.search(searchBy)
            .subscribe(function (res) {
            _this._songList = _this._soundcloudService.shuffleSongList(res.json());
        }, function (err) { return _this._toasterService.pop('error', 'Error', err); });
    };
    RadioPlayerComponent.prototype._setProgressTimer = function () {
        var _this = this;
        this._progressTimer = setInterval(function () {
            _this._player.getPosition()
                .then(function (pos) {
                _this.songProgressPercent = pos / _this.song.duration * 100;
                _this.songProgressMs = pos;
            });
        }, 10);
    };
    RadioPlayerComponent.prototype._unbindKeyboardShortcuts = function () {
        document.removeEventListener('keydown', this._keydownEventHandler, false);
    };
    RadioPlayerComponent.prototype._unsetProgressTimer = function () {
        clearInterval(this._progressTimer);
    };
    RadioPlayerComponent.prototype.changeVolume = function (volume) {
        if (volume < 0 || volume > 100)
            return;
        localStorage.volume = volume;
        this.volume = volume;
        this._player.setVolume(volume / 100);
    };
    RadioPlayerComponent.prototype.isControlTypeSetTo = function (controlType) {
        return this._controlType == controlType;
    };
    RadioPlayerComponent.prototype.setControlType = function (controlType) {
        this._controlType = controlType;
        localStorage.controlType = controlType;
    };
    RadioPlayerComponent.prototype.toggle = function () {
        this.isPlaying = !this.isPlaying;
        this._player.toggle();
        if (this.isPlaying) {
            this._setProgressTimer();
        }
        else {
            this._unsetProgressTimer();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RadioPlayerComponent.prototype, "radio", void 0);
    RadioPlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-radio-player',
            templateUrl: 'radio-player.component.html',
            styleUrls: ['radio-player.component.css']
        }), 
        __metadata('design:paramtypes', [soundcloud_service_1.SoundcloudService, angular2_toaster_1.ToasterService])
    ], RadioPlayerComponent);
    return RadioPlayerComponent;
}());
exports.RadioPlayerComponent = RadioPlayerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSxpQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSxJQUFZLGdCQUFnQixXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFdEQseUNBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsOEJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFRekQ7SUFlRSw4QkFBb0Isa0JBQXFDLEVBQ3RDLGVBQStCO1FBaEJwRCxpQkF3SUM7UUF6SHFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBZDFDLGlCQUFZLEdBQVcsWUFBWSxDQUFDLFdBQVcsSUFBSSx1Q0FBWSxDQUFDLE1BQU0sQ0FBQztRQUN2RSx3QkFBbUIsR0FBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQyxtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUk1QixpQkFBWSxHQUFHLHVDQUFZLENBQUM7UUFDNUIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUUxQix3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFXLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBd0NwRCx5QkFBb0IsR0FBRyxVQUFDLEtBQVU7WUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEtBQUssd0JBQVEsQ0FBQyxRQUFRO3dCQUNwQixLQUFLLENBQUMs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O0FBQUQsQ0F4SUEsQUF3SUMsSUFBQTtBQXhJWSw0QkFBb0IsdUJBd0loQyxDQUFBIiwiZmlsZSI6ImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXInO1xuaW1wb3J0ICogYXMgU291bmRjbG91ZFdpZGdldCBmcm9tICdzb3VuZGNsb3VkLXdpZGdldCc7XG5cbmltcG9ydCB7IENvbnRyb2xUeXBlcyB9IGZyb20gJy4vcmFkaW8tY29udHJvbC10eXBlcy5lbnVtJztcbmltcG9ydCB7IEtleWNvZGVzIH0gZnJvbSAnLi9rZXljb2Rlcy5lbnVtJztcbmltcG9ydCB7IFNvdW5kY2xvdWRTZXJ2aWNlIH0gZnJvbSAnLi9zb3VuZGNsb3VkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzcC1yYWRpby1wbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby1wbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvUGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSByYWRpbztcbiAgcHJpdmF0ZSBfY29udHJvbFR5cGU6IG51bWJlciA9IGxvY2FsU3RvcmFnZS5jb250cm9sVHlwZSB8fCBDb250cm9sVHlwZXMuU2ltcGxlO1xuICBwcml2YXRlIF9kZWZhdWx0U29uZ09wdGlvbnM6IGFueSA9IHsgYXV0b19wbGF5OiB0cnVlIH07XG4gIHByaXZhdGUgX25leHRTb25nSW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3BsYXllcjogYW55O1xuICBwcml2YXRlIF9wcm9ncmVzc1RpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3NvbmdMaXN0OiBhbnlbXTtcbiAgcHVibGljIENvbnRyb2xUeXBlcyA9IENvbnRyb2xUeXBlcztcbiAgcHVibGljIGlzUGxheWluZzogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzb25nOiBhbnk7XG4gIHB1YmxpYyBzb25nUHJvZ3Jlc3NQZXJjZW50OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgc29uZ1Byb2dyZXNzTXM6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB2b2x1bWU6IG51bWJlciA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS52b2x1bWUpIHx8IDUwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NvdW5kY2xvdWRTZXJ2aWNlOiBTb3VuZGNsb3VkU2VydmljZSxcbiAgICAgICAgICAgICBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEluaXRpYWxpemUgcmFkaW8gdXNpbmcgY2hvc2VuIHNvbmdcbiAgICB0aGlzLnNvbmcgPSB0aGlzLnJhZGlvO1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9zb3VuZGNsb3VkU2VydmljZS5iYXNlUGF0aH0vJHt0aGlzLnNvbmcuaWR9YDtcbiAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgU291bmRjbG91ZFdpZGdldCgnc291bmRjbG91ZCcpO1xuICAgIHRoaXMuX3BsYXllci5sb2FkKHVybCwgdGhpcy5fZGVmYXVsdFNvbmdPcHRpb25zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9wbGF5ZXIuZ2V0Q3VycmVudFNvdW5kKCkudGhlbihzb3VuZCA9PiB0aGlzLnNvbmcgPSBzb3VuZCk7XG4gICAgICAgIHRoaXMuY2hhbmdlVm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICAgICAgdGhpcy5fZ2V0U29uZ0xpc3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9wbGF5ZXIub24oU291bmRjbG91ZFdpZGdldC5ldmVudHMuRklOSVNILCB0aGlzLnBsYXlOZXh0U29uZyk7XG4gICAgdGhpcy5fc2V0UHJvZ3Jlc3NUaW1lcigpO1xuICAgIHRoaXMuX2JpbmRLZXlib2FyZFNob3J0Y3V0cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5iaW5kS2V5Ym9hcmRTaG9ydGN1dHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2JpbmRLZXlib2FyZFNob3J0Y3V0cygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5ZG93bkV2ZW50SGFuZGxlciwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U29uZ0xpc3QoKTogdm9pZCB7XG4gICAgbGV0IHNlYXJjaEJ5ID0gdGhpcy5yYWRpby5nZW5yZSB8fCB0aGlzLnJhZGlvLnRhZ19saXN0O1xuICAgIGNvbnNvbGUubG9nKCdzZWFyY2hpbmcgYnknLCBzZWFyY2hCeSk7XG4gICAgdGhpcy5fc291bmRjbG91ZFNlcnZpY2Uuc2VhcmNoKHNlYXJjaEJ5KVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLl9zb25nTGlzdCA9IHRoaXMuX3NvdW5kY2xvdWRTZXJ2aWNlLnNodWZmbGVTb25nTGlzdChyZXMuanNvbigpKTtcbiAgICAgIH0sXG4gICAgICAgIGVyciA9PiB0aGlzLl90b2FzdGVyU2VydmljZS5wb3AoJ2Vycm9yJywgJ0Vycm9yJywgZXJyKSk7XG4gIH1cblxuICBwcml2YXRlIF9rZXlkb3duRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBhbnkpOnZvaWQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgS2V5Y29kZXMuU3BhY2ViYXI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleWNvZGVzLlVwQXJyb3c6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZvbHVtZSh0aGlzLnZvbHVtZSArIDEwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXljb2Rlcy5Eb3duQXJyb3c6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZvbHVtZSh0aGlzLnZvbHVtZSAtIDEwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5Y29kZXMuUmlnaHRBcnJvdzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucGxheU5leHRTb25nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGxheU5leHRTb25nID0gKCk6dm9pZCA9PiB7XG4gICAgLy8gLy8gQWRkIHNvbmcgdG8gaGlzdG9yeVxuICAgIC8vIGxldCBzb25nSGlzdG9yeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNvbmdIaXN0b3J5KSB8fCBbXTtcbiAgICAvLyAvLyBUYWcgd2l0aCByYWRpbyB0aXRsZSBmb3Igc29uZyBoaXN0b3J5IGZpbHRlcmluZ1xuICAgIC8vIHRoaXMuc29uZy5yYWRpb1N0YXRpb24gPSB0aGlzLnJhZGlvLnRpdGxlO1xuICAgIC8vIHNvbmdIaXN0b3J5LnB1c2godGhpcy5zb25nKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc29uZ0hpc3RvcnkgPSBKU09OLnN0cmluZ2lmeShzb25nSGlzdG9yeSk7O1xuICAgIGxldCBuZXh0U29uZyA9IHRoaXMuX3NvbmdMaXN0W3RoaXMuX25leHRTb25nSW5kZXhdO1xuICAgIHRoaXMuX25leHRTb25nSW5kZXgrKztcbiAgICB0aGlzLl9wbGF5ZXIubG9hZChuZXh0U29uZy51cmksIHRoaXMuX2RlZmF1bHRTb25nT3B0aW9ucylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWb2x1bWUodGhpcy52b2x1bWUpO1xuICAgICAgICB0aGlzLnNvbmcgPSBuZXh0U29uZztcbiAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCcnLCAnTm93IFBsYXlpbmcnLCB0aGlzLnNvbmcudGl0bGUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQcm9ncmVzc1RpbWVyKCk6dm9pZCB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuX3BsYXllci5nZXRQb3NpdGlvbigpXG4gICAgICAgIC50aGVuKHBvcyA9PiB7XG4gICAgICAgICAgdGhpcy5zb25nUHJvZ3Jlc3NQZXJjZW50ID0gcG9zIC8gdGhpcy5zb25nLmR1cmF0aW9uICogMTAwO1xuICAgICAgICAgIHRoaXMuc29uZ1Byb2dyZXNzTXMgPSBwb3M7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VuYmluZEtleWJvYXJkU2hvcnRjdXRzKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlkb3duRXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF91bnNldFByb2dyZXNzVGltZXIoKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wcm9ncmVzc1RpbWVyKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWb2x1bWUodm9sdW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodm9sdW1lIDwgMCB8fCB2b2x1bWUgPiAxMDApIHJldHVybjtcbiAgICBsb2NhbFN0b3JhZ2Uudm9sdW1lID0gdm9sdW1lO1xuICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xuICAgIHRoaXMuX3BsYXllci5zZXRWb2x1bWUodm9sdW1lIC8gMTAwKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NvbnRyb2xUeXBlU2V0VG8oY29udHJvbFR5cGU6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sVHlwZSA9PSBjb250cm9sVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb250cm9sVHlwZShjb250cm9sVHlwZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFR5cGUgPSBjb250cm9sVHlwZTtcbiAgICBsb2NhbFN0b3JhZ2UuY29udHJvbFR5cGUgPSBjb250cm9sVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICB0aGlzLmlzUGxheWluZyA9ICF0aGlzLmlzUGxheWluZztcbiAgICB0aGlzLl9wbGF5ZXIudG9nZ2xlKCk7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLl9zZXRQcm9ncmVzc1RpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Vuc2V0UHJvZ3Jlc3NUaW1lcigpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=
