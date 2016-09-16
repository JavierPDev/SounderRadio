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
var SearchPageComponent = (function () {
    function SearchPageComponent(_activatedRoute, _soundcloudService, _toasterService) {
        this._activatedRoute = _activatedRoute;
        this._soundcloudService = _soundcloudService;
        this._toasterService = _toasterService;
        this._cssClass = 'plain-background';
        this.results = [];
        this.searchCompleted = false;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.classList.add(this._cssClass);
        this._activatedRoute.params.subscribe(function (params) {
            _this.searchTerm = params.searchTerm;
            _this._soundcloudService.search(_this.searchTerm)
                .subscribe(function (res) {
                _this.searchCompleted = true;
                _this.results = res.json();
            }, function (err) { return _this._toasterService.pop('error', 'Error', err); });
        });
    };
    SearchPageComponent.prototype.ngOnDestroy = function () {
        document.body.classList.remove(this._cssClass);
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-search-page',
            templateUrl: 'search-page.component.html',
            styleUrls: ['search-page.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, soundcloud_service_1.SoundcloudService, angular2_toaster_1.ToasterService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NlYXJjaC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGlDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBRW5FLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBUXpEO0lBTUUsNkJBQW9CLGVBQStCLEVBQ2hDLGtCQUFxQyxFQUNyQyxlQUErQjtRQUY5QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFQMUMsY0FBUyxHQUFXLGtCQUFrQixDQUFDO1FBQ3hDLFlBQU8sR0FBQSxFQUFFLENBQUE7UUFDVCxvQkFBZSxHQUFZLEtBQUssQ0FBQztJQUthLENBQUM7SUFFdEQsc0NBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzVDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQ1osS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFDQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBL0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzs7MkJBQUE7SUEyQkYsMEJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLDJCQUFtQixzQkEwQi9CLENBQUEiLCJmaWxlIjoiYXBwL3NvdW5kY2xvdWQvc2VhcmNoLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXInO1xuXG5pbXBvcnQgeyBTb3VuZGNsb3VkU2VydmljZSB9IGZyb20gJy4vc291bmRjbG91ZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3Atc2VhcmNoLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ3NlYXJjaC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Nzc0NsYXNzOiBzdHJpbmcgPSAncGxhaW4tYmFja2dyb3VuZCc7XG4gIHB1YmxpYyByZXN1bHRzW106IGFueTtcbiAgcHVibGljIHNlYXJjaENvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2VhcmNoVGVybTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICBwcml2YXRlIF9zb3VuZGNsb3VkU2VydmljZTogU291bmRjbG91ZFNlcnZpY2UsXG4gICAgICAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLl9jc3NDbGFzcyk7XG4gICAgdGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gcGFyYW1zLnNlYXJjaFRlcm07XG4gICAgICB0aGlzLl9zb3VuZGNsb3VkU2VydmljZS5zZWFyY2godGhpcy5zZWFyY2hUZXJtKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHJlcy5qc29uKCk7XG4gICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcCgnZXJyb3InLCAnRXJyb3InLCBlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jc3NDbGFzcyk7XG4gIH1cbn1cblxuXG4iXX0=
