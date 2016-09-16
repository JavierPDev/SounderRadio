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
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var soundcloud_service_1 = require('./soundcloud.service');
var RadioPageComponent = (function () {
    function RadioPageComponent(_activatedRoute, _soundcloudService, _toasterService) {
        this._activatedRoute = _activatedRoute;
        this._soundcloudService = _soundcloudService;
        this._toasterService = _toasterService;
    }
    RadioPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this._getInitialTrack(params.trackId);
        });
    };
    RadioPageComponent.prototype._getInitialTrack = function (trackId) {
        var _this = this;
        this._soundcloudService.getTrack(trackId)
            .subscribe(function (res) { return _this.radio = res.json(); }, function (err) { return _this._toasterService.pop('error', 'Error', err); });
    };
    RadioPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-radio-page',
            templateUrl: 'radio-page.component.html',
            styleUrls: ['radio-page.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, soundcloud_service_1.SoundcloudService, angular2_toaster_1.ToasterService])
    ], RadioPageComponent);
    return RadioPageComponent;
}());
exports.RadioPageComponent = RadioPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3JhZGlvLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsaUNBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFFbkUsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFRekQ7SUFHRSw0QkFBb0IsZUFBK0IsRUFDL0Isa0JBQXFDLEVBQ3JDLGVBQStCO1FBRi9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFHLENBQUM7SUFFdkQscUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDZDQUFnQixHQUF4QixVQUF5QixPQUFlO1FBQXhDLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDdEMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXZCLENBQXVCLEVBQzlCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUF2Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzs7MEJBQUE7SUFtQkYseUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLDBCQUFrQixxQkFrQjlCLENBQUEiLCJmaWxlIjoiYXBwL3NvdW5kY2xvdWQvcmFkaW8tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXInO1xuXG5pbXBvcnQgeyBTb3VuZGNsb3VkU2VydmljZSB9IGZyb20gJy4vc291bmRjbG91ZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3AtcmFkaW8tcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8tcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcmFkaW86IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIFxuICAgICAgICAgICAgICBwcml2YXRlIF9zb3VuZGNsb3VkU2VydmljZTogU291bmRjbG91ZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLl9nZXRJbml0aWFsVHJhY2socGFyYW1zLnRyYWNrSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW5pdGlhbFRyYWNrKHRyYWNrSWQ6IG51bWJlcik6dm9pZCB7XG4gICAgdGhpcy5fc291bmRjbG91ZFNlcnZpY2UuZ2V0VHJhY2sodHJhY2tJZClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmFkaW8gPSByZXMuanNvbigpLCBcbiAgICAgICAgICAgICAgICAgZXJyID0+IHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcCgnZXJyb3InLCAnRXJyb3InLCBlcnIpKTtcbiAgfVxufVxuIl19
