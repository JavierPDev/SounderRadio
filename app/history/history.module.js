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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var angular2_moment_1 = require('angular2-moment');
var history_component_1 = require('./history.component');
var HistoryModule = (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, angular2_moment_1.MomentModule],
            declarations: [history_component_1.HistoryComponent],
            exports: [history_component_1.HistoryComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryModule);
    return HistoryModule;
}());
exports.HistoryModule = HistoryModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oaXN0b3J5L2hpc3RvcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0Msa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFPdkQ7SUFBQTtJQUE2QixDQUFDO0lBTDlCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxFQUFFLDhCQUFZLENBQUM7WUFDbkQsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDNUIsQ0FBQzs7cUJBQUE7SUFDMkIsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLHFCQUFhLGdCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hpc3RvcnkvaGlzdG9yeS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tb21lbnQnO1xuXG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgTW9tZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSGlzdG9yeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIaXN0b3J5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIaXN0b3J5TW9kdWxlIHsgfVxuIl19
