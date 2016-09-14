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
        this.ControlTypes = radio_control_types_enum_1.ControlTypes;
        this.isPlaying = true;
        this.songProgressPercent = 0;
        this.songProgressMs = 0;
        this.volume = parseInt(localStorage.volume) || 50;
        this._keydownEventHandler = function (event) {
            if (event.target.nodeName === 'BODY') {
                switch (event.keyCode) {
                    case keycodes_enum_1.Keycodes.Spacebar:
                        _this.toggle();
                        break;
                    case keycodes_enum_1.Keycodes.UpArrow:
                        _this.changeVolume(_this.volume + 10);
                        break;
                    case keycodes_enum_1.Keycodes.DownArrow:
                        _this.changeVolume(_this.volume - 10);
                        break;
                }
            }
        };
    }
    RadioPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.song = this.radio;
        var url = this._soundcloudService.basePath + "/" + this.song.id;
        var options = { auto_play: true };
        this._player = new SoundcloudWidget('soundcloud');
        this._player.load(url, options)
            .then(function () {
            _this._player.getCurrentSound(function (sound) { return _this.song = sound; });
            _this.changeVolume(_this.volume);
        });
        ;
        this._player.on(SoundcloudWidget.events.FINISH, function () { return console.log('FINISHED'); });
        this._setProgressTimer();
        this._bindKeyboardShortcuts();
    };
    RadioPlayerComponent.prototype.ngOnDestroy = function () {
        this._unbindKeyboardShortcuts();
    };
    RadioPlayerComponent.prototype._bindKeyboardShortcuts = function () {
        document.addEventListener('keydown', this._keydownEventHandler, false);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSxpQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSxJQUFZLGdCQUFnQixXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFFdEQseUNBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsOEJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFRekQ7SUFZRSw4QkFBb0Isa0JBQXFDLEVBQ3RDLGVBQStCO1FBYnBELGlCQXFHQztRQXpGcUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFYMUMsaUJBQVksR0FBVyxZQUFZLENBQUMsV0FBVyxJQUFJLHVDQUFZLENBQUMsTUFBTSxDQUFDO1FBR3hFLGlCQUFZLEdBQUcsdUNBQVksQ0FBQztRQUM1QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQUNoQyxtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixXQUFNLEdBQVcsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFnQ3BELHlCQUFvQixHQUFHLFVBQUMsS0FBSztZQUNuQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSyx3QkFBUSxDQUFDLFFBQVE7d0JBQ3BCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDZCxLQUFLLENBQUM7b0JBQ1IsS0FBSyx3QkFBUSxDQUFDLE9BQU87d0JBQ25CLEtBQUksQ0FBQyxZ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TSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxpREFBa0IsR0FBekIsVUFBMEIsV0FBbUI7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksV0FBVyxDQUFDO0lBQzFDLENBQUM7SUFFTSw2Q0FBYyxHQUFyQixVQUFzQixXQUFtQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxZQUFZLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRU0scUNBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFuR0Q7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBUFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQXNHRiwyQkFBQztBQUFELENBckdBLEFBcUdDLElBQUE7QUFyR1ksNEJBQW9CLHVCQXFHaEMsQ0FBQSIsImZpbGUiOiJhcHAvc291bmRjbG91ZC9yYWRpby1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItdG9hc3Rlci9hbmd1bGFyMi10b2FzdGVyJztcbmltcG9ydCAqIGFzIFNvdW5kY2xvdWRXaWRnZXQgZnJvbSAnc291bmRjbG91ZC13aWRnZXQnO1xuXG5pbXBvcnQgeyBDb250cm9sVHlwZXMgfSBmcm9tICcuL3JhZGlvLWNvbnRyb2wtdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBLZXljb2RlcyB9IGZyb20gJy4va2V5Y29kZXMuZW51bSc7XG5pbXBvcnQgeyBTb3VuZGNsb3VkU2VydmljZSB9IGZyb20gJy4vc291bmRjbG91ZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3AtcmFkaW8tcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1BsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJhZGlvO1xuICBwcml2YXRlIF9jb250cm9sVHlwZTogbnVtYmVyID0gbG9jYWxTdG9yYWdlLmNvbnRyb2xUeXBlIHx8IENvbnRyb2xUeXBlcy5TaW1wbGU7XG4gIHByaXZhdGUgX3BsYXllcjogYW55O1xuICBwcml2YXRlIF9wcm9ncmVzc1RpbWVyOiBhbnk7XG4gIHB1YmxpYyBDb250cm9sVHlwZXMgPSBDb250cm9sVHlwZXM7XG4gIHB1YmxpYyBpc1BsYXlpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc29uZzogYW55O1xuICBwdWJsaWMgc29uZ1Byb2dyZXNzUGVyY2VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHNvbmdQcm9ncmVzc01zOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgdm9sdW1lOiBudW1iZXIgPSBwYXJzZUludChsb2NhbFN0b3JhZ2Uudm9sdW1lKSB8fCA1MDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zb3VuZGNsb3VkU2VydmljZTogU291bmRjbG91ZFNlcnZpY2UsXG4gICAgICAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLl90b2FzdGVyU2VydmljZS5wb3AoJ2Vycm9yJywgJ1RpdGxlJywgJ0hlbGxvIHdvcmxkIScpO1xuICAgIC8vIEluaXRpYWxpemUgcmFkaW8gdXNpbmcgY2hvc2VuIHNvbmdcbiAgICB0aGlzLnNvbmcgPSB0aGlzLnJhZGlvO1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLl9zb3VuZGNsb3VkU2VydmljZS5iYXNlUGF0aH0vJHt0aGlzLnNvbmcuaWR9YDtcbiAgICBsZXQgb3B0aW9ucyA9IHsgYXV0b19wbGF5OiB0cnVlIH07XG4gICAgdGhpcy5fcGxheWVyID0gbmV3IFNvdW5kY2xvdWRXaWRnZXQoJ3NvdW5kY2xvdWQnKTtcbiAgICB0aGlzLl9wbGF5ZXIubG9hZCh1cmwsIG9wdGlvbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BsYXllci5nZXRDdXJyZW50U291bmQoc291bmQgPT4gdGhpcy5zb25nID0gc291bmQ7XG4gICAgICAgIHRoaXMuY2hhbmdlVm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICBdKSk7XG4gICAgdGhpcy5fcGxheWVyLm9uKFNvdW5kY2xvdWRXaWRnZXQuZXZlbnRzLkZJTklTSCxcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKCdGSU5JU0hFRCcpKTtcbiAgICB0aGlzLl9zZXRQcm9ncmVzc1RpbWVyKCk7XG4gICAgdGhpcy5fYmluZEtleWJvYXJkU2hvcnRjdXRzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bmJpbmRLZXlib2FyZFNob3J0Y3V0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZEtleWJvYXJkU2hvcnRjdXRzKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlkb3duRXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9rZXlkb3duRXZlbnRIYW5kbGVyID0gKGV2ZW50KTp2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleWNvZGVzLlNwYWNlYmFyOlxuICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5Y29kZXMuVXBBcnJvdzpcbiAgICAgICAgICB0aGlzLmNoYW5nZVZvbHVtZSh0aGlzLnZvbHVtZSArIDEwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXljb2Rlcy5Eb3duQXJyb3c6XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWb2x1bWUodGhpcy52b2x1bWUgLSAxMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFByb2dyZXNzVGltZXIoKTp2b2lkIHtcbiAgICB0aGlzLl9wcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5fcGxheWVyLmdldFBvc2l0aW9uKClcbiAgICAgICAgLnRoZW4ocG9zID0+IHtcbiAgICAgICAgICB0aGlzLnNvbmdQcm9ncmVzc1BlcmNlbnQgPSBwb3MgLyB0aGlzLnNvbmcuZHVyYXRpb24gKiAxMDA7XG4gICAgICAgICAgdGhpcy5zb25nUHJvZ3Jlc3NNcyA9IHBvcztcbiAgICAgICAgfSk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5iaW5kS2V5Ym9hcmRTaG9ydGN1dHMoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleWRvd25FdmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc2V0UHJvZ3Jlc3NUaW1lcigpOiB2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3Byb2dyZXNzVGltZXIpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh2b2x1bWUgPCAwIHx8IHZvbHVtZSA+IDEwMCkgcmV0dXJuO1xuICAgIGxvY2FsU3RvcmFnZS52b2x1bWUgPSB2b2x1bWU7XG4gICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG4gICAgdGhpcy5fcGxheWVyLnNldFZvbHVtZSh2b2x1bWUgLyAxMDApO1xuICB9XG5cbiAgcHVibGljIGlzQ29udHJvbFR5cGVTZXRUbyhjb250cm9sVHlwZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xUeXBlID09IGNvbnRyb2xUeXBlO1xuICB9XG5cbiAgcHVibGljIHNldENvbnRyb2xUeXBlKGNvbnRyb2xUeXBlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVHlwZSA9IGNvbnRyb2xUeXBlO1xuICAgIGxvY2FsU3RvcmFnZS5jb250cm9sVHlwZSA9IGNvbnRyb2xUeXBlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgIHRoaXMuaXNQbGF5aW5nID0gIXRoaXMuaXNQbGF5aW5nO1xuICAgIHRoaXMuX3BsYXllci50b2dnbGUoKTtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuX3NldFByb2dyZXNzVGltZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdW5zZXRQcm9ncmVzc1RpbWVyKCk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==
