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
var SearchComponent = (function () {
    function SearchComponent(_router) {
        this._router = _router;
    }
    SearchComponent.prototype.search = function () {
        this._router.navigate(['search', this.searchTerm]);
        if (this.clearAfterSubmission)
            this.searchTerm = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchComponent.prototype, "searchTerm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SearchComponent.prototype, "clearAfterSubmission", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-search',
            templateUrl: 'search.component.html',
            styleUrls: ['search.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVF6QztJQUlFLHlCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFFaEMsZ0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFSRDtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQVdGLHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx1QkFBZSxrQkFVM0IsQ0FBQSIsImZpbGUiOiJhcHAvc291bmRjbG91ZC9zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3Atc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VhcmNoLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2VhcmNoVGVybTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGVhckFmdGVyU3VibWlzc2lvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICBwdWJsaWMgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ3NlYXJjaCcsIHRoaXMuc2VhcmNoVGVybV0pO1xuICAgIGlmICh0aGlzLmNsZWFyQWZ0ZXJTdWJtaXNzaW9uKSB0aGlzLnNlYXJjaFRlcm0gPSAnJztcbiAgfVxufVxuXG4iXX0=
