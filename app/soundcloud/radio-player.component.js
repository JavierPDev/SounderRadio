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
                _this.isPlaying = true;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSxpQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSxJQUFZLGdCQUFnQixXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFdEQseUNBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsOEJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFRekQ7SUFlRSw4QkFBb0Isa0JBQXFDLEVBQ3RDLGVBQStCO1FBaEJwRCxpQkF5SUM7UUExSHFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBZDFDLGlCQUFZLEdBQVcsWUFBWSxDQUFDLFdBQVcsSUFBSSx1Q0FBWSxDQUFDLE1BQU0sQ0FBQztRQUN2RSx3QkFBbUIsR0FBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQyxtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUk1QixpQkFBWSxHQUFHLHVDQUFZLENBQUM7UUFDNUIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUUxQix3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFXLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBd0NwRCx5QkFBb0IsR0FBRyxVQUFDLEtBQVU7WUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEtBQUssd0JBQVEsQ0FBQyxRQUFRO3dCQUNwQixLQUFLLENBQUMs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NEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQTBJRiwyQkFBQztBQUFELENBeklBLEFBeUlDLElBQUE7QUF6SVksNEJBQW9CLHVCQXlJaEMsQ0FBQSIsImZpbGUiOiJhcHAvc291bmRjbG91ZC9yYWRpby1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItdG9hc3Rlci9hbmd1bGFyMi10b2FzdGVyJztcbmltcG9ydCAqIGFzIFNvdW5kY2xvdWRXaWRnZXQgZnJvbSAnc291bmRjbG91ZC13aWRnZXQnO1xuXG5pbXBvcnQgeyBDb250cm9sVHlwZXMgfSBmcm9tICcuL3JhZGlvLWNvbnRyb2wtdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBLZXljb2RlcyB9IGZyb20gJy4va2V5Y29kZXMuZW51bSc7XG5pbXBvcnQgeyBTb3VuZGNsb3VkU2VydmljZSB9IGZyb20gJy4vc291bmRjbG91ZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3AtcmFkaW8tcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1BsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcmFkaW87XG4gIHByaXZhdGUgX2NvbnRyb2xUeXBlOiBudW1iZXIgPSBsb2NhbFN0b3JhZ2UuY29udHJvbFR5cGUgfHwgQ29udHJvbFR5cGVzLlNpbXBsZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdFNvbmdPcHRpb25zOiBhbnkgPSB7IGF1dG9fcGxheTogdHJ1ZSB9O1xuICBwcml2YXRlIF9uZXh0U29uZ0luZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9wbGF5ZXI6IGFueTtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NUaW1lcjogYW55O1xuICBwcml2YXRlIF9zb25nTGlzdDogYW55W107XG4gIHB1YmxpYyBDb250cm9sVHlwZXMgPSBDb250cm9sVHlwZXM7XG4gIHB1YmxpYyBpc1BsYXlpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc29uZzogYW55O1xuICBwdWJsaWMgc29uZ1Byb2dyZXNzUGVyY2VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHNvbmdQcm9ncmVzc01zOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgdm9sdW1lOiBudW1iZXIgPSBwYXJzZUludChsb2NhbFN0b3JhZ2Uudm9sdW1lKSB8fCA1MDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zb3VuZGNsb3VkU2VydmljZTogU291bmRjbG91ZFNlcnZpY2UsXG4gICAgICAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBJbml0aWFsaXplIHJhZGlvIHVzaW5nIGNob3NlbiBzb25nXG4gICAgdGhpcy5zb25nID0gdGhpcy5yYWRpbztcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fc291bmRjbG91ZFNlcnZpY2UuYmFzZVBhdGh9LyR7dGhpcy5zb25nLmlkfWA7XG4gICAgdGhpcy5fcGxheWVyID0gbmV3IFNvdW5kY2xvdWRXaWRnZXQoJ3NvdW5kY2xvdWQnKTtcbiAgICB0aGlzLl9wbGF5ZXIubG9hZCh1cmwsIHRoaXMuX2RlZmF1bHRTb25nT3B0aW9ucylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcGxheWVyLmdldEN1cnJlbnRTb3VuZCgpLnRoZW4oc291bmQgPT4gdGhpcy5zb25nID0gc291bmQpO1xuICAgICAgICB0aGlzLmNoYW5nZVZvbHVtZSh0aGlzLnZvbHVtZSk7XG4gICAgICAgIHRoaXMuX2dldFNvbmdMaXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcGxheWVyLm9uKFNvdW5kY2xvdWRXaWRnZXQuZXZlbnRzLkZJTklTSCwgdGhpcy5wbGF5TmV4dFNvbmcpO1xuICAgIHRoaXMuX3NldFByb2dyZXNzVGltZXIoKTtcbiAgICB0aGlzLl9iaW5kS2V5Ym9hcmRTaG9ydGN1dHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3VuYmluZEtleWJvYXJkU2hvcnRjdXRzKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kS2V5Ym9hcmRTaG9ydGN1dHMoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleWRvd25FdmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFNvbmdMaXN0KCk6IHZvaWQge1xuICAgIGxldCBzZWFyY2hCeSA9IHRoaXMucmFkaW8uZ2VucmUgfHwgdGhpcy5yYWRpby50YWdfbGlzdDtcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoaW5nIGJ5Jywgc2VhcmNoQnkpO1xuICAgIHRoaXMuX3NvdW5kY2xvdWRTZXJ2aWNlLnNlYXJjaChzZWFyY2hCeSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5fc29uZ0xpc3QgPSB0aGlzLl9zb3VuZGNsb3VkU2VydmljZS5zaHVmZmxlU29uZ0xpc3QocmVzLmpzb24oKSk7XG4gICAgICB9LFxuICAgICAgICBlcnIgPT4gdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCdlcnJvcicsICdFcnJvcicsIGVycikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfa2V5ZG93bkV2ZW50SGFuZGxlciA9IChldmVudDogYW55KTp2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleWNvZGVzLlNwYWNlYmFyOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXljb2Rlcy5VcEFycm93OlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWb2x1bWUodGhpcy52b2x1bWUgKyAxMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5Y29kZXMuRG93bkFycm93OlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWb2x1bWUodGhpcy52b2x1bWUgLSAxMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleWNvZGVzLlJpZ2h0QXJyb3c6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnBsYXlOZXh0U29uZygpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYXlOZXh0U29uZyA9ICgpOnZvaWQgPT4ge1xuICAgIC8vIC8vIEFkZCBzb25nIHRvIGhpc3RvcnlcbiAgICAvLyBsZXQgc29uZ0hpc3RvcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zb25nSGlzdG9yeSkgfHwgW107XG4gICAgLy8gLy8gVGFnIHdpdGggcmFkaW8gdGl0bGUgZm9yIHNvbmcgaGlzdG9yeSBmaWx0ZXJpbmdcbiAgICAvLyB0aGlzLnNvbmcucmFkaW9TdGF0aW9uID0gdGhpcy5yYWRpby50aXRsZTtcbiAgICAvLyBzb25nSGlzdG9yeS5wdXNoKHRoaXMuc29uZyk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNvbmdIaXN0b3J5ID0gSlNPTi5zdHJpbmdpZnkoc29uZ0hpc3RvcnkpOztcbiAgICBsZXQgbmV4dFNvbmcgPSB0aGlzLl9zb25nTGlzdFt0aGlzLl9uZXh0U29uZ0luZGV4XTtcbiAgICB0aGlzLl9uZXh0U29uZ0luZGV4Kys7XG4gICAgdGhpcy5fcGxheWVyLmxvYWQobmV4dFNvbmcudXJpLCB0aGlzLl9kZWZhdWx0U29uZ09wdGlvbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlVm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICAgICAgdGhpcy5zb25nID0gbmV4dFNvbmc7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCcnLCAnTm93IFBsYXlpbmcnLCB0aGlzLnNvbmcudGl0bGUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRQcm9ncmVzc1RpbWVyKCk6dm9pZCB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuX3BsYXllci5nZXRQb3NpdGlvbigpXG4gICAgICAgIC50aGVuKHBvcyA9PiB7XG4gICAgICAgICAgdGhpcy5zb25nUHJvZ3Jlc3NQZXJjZW50ID0gcG9zIC8gdGhpcy5zb25nLmR1cmF0aW9uICogMTAwO1xuICAgICAgICAgIHRoaXMuc29uZ1Byb2dyZXNzTXMgPSBwb3M7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VuYmluZEtleWJvYXJkU2hvcnRjdXRzKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlkb3duRXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF91bnNldFByb2dyZXNzVGltZXIoKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wcm9ncmVzc1RpbWVyKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWb2x1bWUodm9sdW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodm9sdW1lIDwgMCB8fCB2b2x1bWUgPiAxMDApIHJldHVybjtcbiAgICBsb2NhbFN0b3JhZ2Uudm9sdW1lID0gdm9sdW1lO1xuICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xuICAgIHRoaXMuX3BsYXllci5zZXRWb2x1bWUodm9sdW1lIC8gMTAwKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NvbnRyb2xUeXBlU2V0VG8oY29udHJvbFR5cGU6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sVHlwZSA9PSBjb250cm9sVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb250cm9sVHlwZShjb250cm9sVHlwZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFR5cGUgPSBjb250cm9sVHlwZTtcbiAgICBsb2NhbFN0b3JhZ2UuY29udHJvbFR5cGUgPSBjb250cm9sVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICB0aGlzLmlzUGxheWluZyA9ICF0aGlzLmlzUGxheWluZztcbiAgICB0aGlzLl9wbGF5ZXIudG9nZ2xlKCk7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLl9zZXRQcm9ncmVzc1RpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Vuc2V0UHJvZ3Jlc3NUaW1lcigpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=
