"use strict";
var search_page_component_1 = require('./search-page.component');
var radio_page_component_1 = require('./radio-page.component');
exports.SoundcloudRoutes = [
    {
        path: 'search/:searchTerm',
        component: search_page_component_1.SearchPageComponent
    },
    {
        path: 'radio/:trackId',
        component: radio_page_component_1.RadioPageComponent
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NvdW5kY2xvdWQucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzQ0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCxxQ0FBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQUUvQyx3QkFBZ0IsR0FBWTtJQUN2QztRQUNFLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsU0FBUyxFQUFFLDJDQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUseUNBQWtCO0tBQzlCO0NBQ0YsQ0FBQyIsImZpbGUiOiJhcHAvc291bmRjbG91ZC9zb3VuZGNsb3VkLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2VhcmNoUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8tcGFnZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgU291bmRjbG91ZFJvdXRlczogUm91dGVbXSA9IFtcbiAge1xuICAgIHBhdGg6ICdzZWFyY2gvOnNlYXJjaFRlcm0nLFxuICAgIGNvbXBvbmVudDogU2VhcmNoUGFnZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3JhZGlvLzp0cmFja0lkJyxcbiAgICBjb21wb25lbnQ6IFJhZGlvUGFnZUNvbXBvbmVudFxuICB9XG5dO1xuXG4iXX0=