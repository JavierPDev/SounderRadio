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
var http_1 = require('@angular/http');
var SoundcloudService = (function () {
    function SoundcloudService(_http) {
        this._http = _http;
        this.basePath = 'https://api.soundcloud.com/tracks';
        this._clientId = '8159b4b99151c48d6aaf6770853bfd7a';
    }
    SoundcloudService.prototype.getTrack = function (trackId) {
        var params = new http_1.URLSearchParams();
        params.set('client_id', this._clientId);
        var url = this.basePath + ("/" + trackId);
        return this._http.get(url, { search: params });
    };
    SoundcloudService.prototype.search = function (searchTerm) {
        var params = new http_1.URLSearchParams();
        params.set('client_id', this._clientId);
        params.set('q', searchTerm);
        return this._http.get(this.basePath, { search: params });
    };
    SoundcloudService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SoundcloudService);
    return SoundcloudService;
}());
exports.SoundcloudService = SoundcloudService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NvdW5kY2xvdWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUd0RDtJQUlFLDJCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUh4QixhQUFRLEdBQVcsbUNBQW1DLENBQUM7UUFDdEQsY0FBUyxHQUFXLGtDQUFrQyxDQUFDO0lBRy9ELENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLE9BQWU7UUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBSSxPQUFPLENBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBcEJIO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUFxQmIsd0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHlCQUFpQixvQkFvQjdCLENBQUEiLCJmaWxlIjoiYXBwL3NvdW5kY2xvdWQvc291bmRjbG91ZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VuZGNsb3VkU2VydmljZSB7XG4gIHB1YmxpYyBiYXNlUGF0aDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLnNvdW5kY2xvdWQuY29tL3RyYWNrcyc7XG4gIHByaXZhdGUgX2NsaWVudElkOiBzdHJpbmcgPSAnODE1OWI0Yjk5MTUxYzQ4ZDZhYWY2NzcwODUzYmZkN2EnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmFjayh0cmFja0lkOiBudW1iZXIpIHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5zZXQoJ2NsaWVudF9pZCcsIHRoaXMuX2NsaWVudElkKTtcbiAgICBsZXQgdXJsID0gdGhpcy5iYXNlUGF0aCArIGAvJHt0cmFja0lkfWA7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwge3NlYXJjaDogcGFyYW1zfSk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLnNldCgnY2xpZW50X2lkJywgdGhpcy5fY2xpZW50SWQpO1xuICAgIHBhcmFtcy5zZXQoJ3EnLCBzZWFyY2hUZXJtKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5iYXNlUGF0aCwge3NlYXJjaDogcGFyYW1zfSk7XG4gIH1cbn1cbiJdfQ==
