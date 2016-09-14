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
var angular2_moment_1 = require('angular2-moment');
var sounder_home_component_1 = require('./sounder-home.component');
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
            imports: [common_1.CommonModule, forms_1.FormsModule, angular2_moment_1.MomentModule],
            declarations: [
                sounder_home_component_1.SounderHomeComponent,
                song_card_component_1.SongCardComponent,
                search_component_1.SearchComponent,
                search_page_component_1.SearchPageComponent,
                radio_page_component_1.RadioPageComponent,
                radio_player_component_1.RadioPlayerComponent,
                duration_pipe_1.DurationPipe
            ],
            exports: [
                sounder_home_component_1.SounderHomeComponent,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NvdW5kY2xvdWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFDaEUsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsc0NBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQscUNBQW1DLHdCQUF3QixDQUFDLENBQUE7QUFDNUQsdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFDaEUsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFDekQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFxQi9DO0lBQUE7SUFBZ0MsQ0FBQztJQW5CakM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG1CQUFXLEVBQUUsOEJBQVksQ0FBQztZQUNsRCxZQUFZLEVBQUU7Z0JBQ1osNkNBQW9CO2dCQUNwQix1Q0FBaUI7Z0JBQ2pCLGtDQUFlO2dCQUNmLDJDQUFtQjtnQkFDbkIseUNBQWtCO2dCQUNsQiw2Q0FBb0I7Z0JBQ3BCLDRCQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsNkNBQW9CO2dCQUNwQix1Q0FBaUI7Z0JBQ2pCLGtDQUFlO2dCQUNmLDJDQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3dCQUFBO0lBQzhCLHVCQUFDO0FBQUQsQ0FBaEMsQUFBaUMsSUFBQTtBQUFwQix3QkFBZ0IsbUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvc291bmRjbG91ZC9zb3VuZGNsb3VkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tb21lbnQnO1xuXG5pbXBvcnQgeyBTb3VuZGVySG9tZUNvbXBvbmVudCB9IGZyb20gJy4vc291bmRlci1ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb25nQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vc29uZy1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3JhZGlvLXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291bmRjbG91ZFNlcnZpY2UgfSBmcm9tICcuL3NvdW5kY2xvdWQuc2VydmljZSc7XG5pbXBvcnQgeyBEdXJhdGlvblBpcGUgfSBmcm9tICcuL2R1cmF0aW9uLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTW9tZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU291bmRlckhvbWVDb21wb25lbnQsXG4gICAgU29uZ0NhcmRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaFBhZ2VDb21wb25lbnQsXG4gICAgUmFkaW9QYWdlQ29tcG9uZW50LFxuICAgIFJhZGlvUGxheWVyQ29tcG9uZW50LFxuICAgIER1cmF0aW9uUGlwZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU291bmRlckhvbWVDb21wb25lbnQsXG4gICAgU29uZ0NhcmRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaFBhZ2VDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU291bmRjbG91ZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNvdW5kY2xvdWRNb2R1bGUgeyB9XG5cbiJdfQ==
