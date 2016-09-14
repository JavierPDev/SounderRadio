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
var router_1 = require('@angular/router');
var soundcloud_service_1 = require('./soundcloud.service');
var RadioPageComponent = (function () {
    function RadioPageComponent(_activatedRoute, _soundcloudService) {
        this._activatedRoute = _activatedRoute;
        this._soundcloudService = _soundcloudService;
    }
    RadioPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this._getTrack(params.trackId);
        });
    };
    RadioPageComponent.prototype._getTrack = function (trackId) {
        var _this = this;
        this._soundcloudService.getTrack(trackId)
            .subscribe(function (res) { return _this.radio = res.json(); }, function (err) { return console.log(err); });
    };
    RadioPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-radio-page',
            templateUrl: 'radio-page.component.html',
            styleUrls: ['radio-page.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, soundcloud_service_1.SoundcloudService])
    ], RadioPageComponent);
    return RadioPageComponent;
}());
exports.RadioPageComponent = RadioPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFFakQsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFRekQ7SUFHRSw0QkFBb0IsZUFBK0IsRUFDL0Isa0JBQXFDO1FBRHJDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQztJQUU3RCxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNDQUFTLEdBQWpCLFVBQWtCLE9BQWU7UUFBakMsaUJBR0M7UUFGQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsRUFBRSxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBckJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7OzBCQUFBO0lBaUJGLHlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSwwQkFBa0IscUJBZ0I5QixDQUFBIiwiZmlsZSI6ImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU291bmRjbG91ZFNlcnZpY2UgfSBmcm9tICcuL3NvdW5kY2xvdWQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NwLXJhZGlvLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHJhZGlvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc291bmRjbG91ZFNlcnZpY2U6IFNvdW5kY2xvdWRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuX2dldFRyYWNrKHBhcmFtcy50cmFja0lkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyYWNrKHRyYWNrSWQ6IG51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5fc291bmRjbG91ZFNlcnZpY2UuZ2V0VHJhY2sodHJhY2tJZClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmFkaW8gPSByZXMuanNvbigpLCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cbn1cbiJdfQ==
