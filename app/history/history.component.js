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
var HistoryComponent = (function () {
    function HistoryComponent() {
        this._cssClass = 'plain-background';
    }
    HistoryComponent.prototype.ngOnInit = function () {
        document.body.classList.add(this._cssClass);
    };
    HistoryComponent.prototype.ngOnDestroy = function () {
        document.body.classList.remove(this._cssClass);
    };
    HistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sp-history',
            templateUrl: 'history.component.html',
            styleUrls: ['history.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFTN0Q7SUFHRTtRQUZRLGNBQVMsR0FBVyxrQkFBa0IsQ0FBQztJQUVoQyxDQUFDO0lBRWhCLG1DQUFRLEdBQVI7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBbEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O3dCQUFBO0lBY0YsdUJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHdCQUFnQixtQkFZNUIsQ0FBQSIsImZpbGUiOiJhcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3AtaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydoaXN0b3J5LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jc3NDbGFzczogc3RyaW5nID0gJ3BsYWluLWJhY2tncm91bmQnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5fY3NzQ2xhc3MpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Nzc0NsYXNzKTtcbiAgfVxufVxuIl19
