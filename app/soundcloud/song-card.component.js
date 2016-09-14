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
var SongCardComponent = (function () {
    function SongCardComponent(_router) {
        this._router = _router;
    }
    SongCardComponent.prototype.playRadio = function () {
        this._router.navigate(['radio', this.song.id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SongCardComponent.prototype, "song", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SongCardComponent.prototype, "searchTerm", void 0);
    SongCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-song-card',
            templateUrl: 'song-card.component.html',
            styleUrls: ['song-card.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SongCardComponent);
    return SongCardComponent;
}());
exports.SongCardComponent = SongCardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NvbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVF6QztJQUlFLDJCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFFaEMscUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQVBEO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQVJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3lCQUFBO0lBVUYsd0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHlCQUFpQixvQkFTN0IsQ0FBQSIsImZpbGUiOiJhcHAvc291bmRjbG91ZC9zb25nLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3Atc29uZy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICdzb25nLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc29uZy1jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTb25nQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNvbmc6IGFueTtcbiAgQElucHV0KCkgc2VhcmNoVGVybTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIHB1YmxpYyBwbGF5UmFkaW8oKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsncmFkaW8nLCB0aGlzLnNvbmcuaWRdKTtcbiAgfVxufVxuXG4iXX0=
