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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_moment_1 = require('angular2-moment');
var song_card_component_1 = require('./song-card.component');
var search_component_1 = require('./search.component');
var search_page_component_1 = require('./search-page.component');
var radio_page_component_1 = require('./radio-page.component');
var radio_player_component_1 = require('./radio-player.component');
var soundcloud_service_1 = require('./soundcloud.service');
var duration_pipe_1 = require('./duration.pipe');
var SoundcloudModule = (function () {
    function SoundcloudModule() {
    }
    SoundcloudModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, angular2_moment_1.MomentModule],
            declarations: [
                song_card_component_1.SongCardComponent,
                search_component_1.SearchComponent,
                search_page_component_1.SearchPageComponent,
                radio_page_component_1.RadioPageComponent,
                radio_player_component_1.RadioPlayerComponent,
                duration_pipe_1.DurationPipe
            ],
            exports: [
                song_card_component_1.SongCardComponent,
                search_component_1.SearchComponent,
                search_page_component_1.SearchPageComponent
            ],
            providers: [soundcloud_service_1.SoundcloudService]
        }), 
        __metadata('design:paramtypes', [])
    ], SoundcloudModule);
    return SoundcloudModule;
}());
exports.SoundcloudModule = SoundcloudModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NvdW5kY2xvdWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0Msb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsc0NBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQscUNBQW1DLHdCQUF3QixDQUFDLENBQUE7QUFDNUQsdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFDaEUsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFDekQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFtQi9DO0lBQUE7SUFBZ0MsQ0FBQztJQWpCakM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG1CQUFXLEVBQUUscUJBQVksRUFBRSw4QkFBWSxDQUFDO1lBQ2hFLFlBQVksRUFBRTtnQkFDWix1Q0FBaUI7Z0JBQ2pCLGtDQUFlO2dCQUNmLDJDQUFtQjtnQkFDbkIseUNBQWtCO2dCQUNsQiw2Q0FBb0I7Z0JBQ3BCLDRCQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUNBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZiwyQ0FBbUI7YUFDcEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NvdW5kY2xvdWQvc291bmRjbG91ZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vbWVudE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1vbWVudCc7XG5cbmltcG9ydCB7IFNvbmdDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9zb25nLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb1BsYXllckNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VuZGNsb3VkU2VydmljZSB9IGZyb20gJy4vc291bmRjbG91ZC5zZXJ2aWNlJztcbmltcG9ydCB7IER1cmF0aW9uUGlwZSB9IGZyb20gJy4vZHVyYXRpb24ucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE1vbWVudE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNvbmdDYXJkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hQYWdlQ29tcG9uZW50LFxuICAgIFJhZGlvUGFnZUNvbXBvbmVudCxcbiAgICBSYWRpb1BsYXllckNvbXBvbmVudCxcbiAgICBEdXJhdGlvblBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNvbmdDYXJkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hQYWdlQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1NvdW5kY2xvdWRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTb3VuZGNsb3VkTW9kdWxlIHsgfVxuXG4iXX0=
