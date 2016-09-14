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
var SearchPageComponent = (function () {
    function SearchPageComponent(_activatedRoute, _soundcloudService) {
        this._activatedRoute = _activatedRoute;
        this._soundcloudService = _soundcloudService;
        this.results = [];
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.searchTerm = params.searchTerm;
            _this._soundcloudService.search(_this.searchTerm)
                .subscribe(function (res) { return _this.results = res.json(); }, function (err) { return console.log(err); });
        });
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-search-page',
            templateUrl: 'search-page.component.html',
            styleUrls: ['search-page.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, soundcloud_service_1.SoundcloudService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NlYXJjaC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBRWpELG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBUXpEO0lBSUUsNkJBQW9CLGVBQStCLEVBQ2hDLGtCQUFxQztRQURwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUhqRCxZQUFPLEdBQUEsRUFBRSxDQUFBO0lBRzJDLENBQUM7SUFFNUQsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDO2lCQUM1QyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBekIsQ0FBeUIsRUFDakMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzs7MkJBQUE7SUFpQkYsMEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLDJCQUFtQixzQkFnQi9CLENBQUEiLCJmaWxlIjoiYXBwL3NvdW5kY2xvdWQvc2VhcmNoLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU291bmRjbG91ZFNlcnZpY2UgfSBmcm9tICcuL3NvdW5kY2xvdWQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NwLXNlYXJjaC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2gtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWFyY2gtcGFnZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc2VhcmNoVGVybTogc3RyaW5nO1xuICBwdWJsaWMgcmVzdWx0c1tdOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgIHByaXZhdGUgX3NvdW5kY2xvdWRTZXJ2aWNlOiBTb3VuZGNsb3VkU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSBwYXJhbXMuc2VhcmNoVGVybTtcbiAgICAgIHRoaXMuX3NvdW5kY2xvdWRTZXJ2aWNlLnNlYXJjaCh0aGlzLnNlYXJjaFRlcm0pXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmVzdWx0cyA9IHJlcy5qc29uKCksXG4gICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cbiJdfQ==
