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
        var LIMIT = 200;
        var params = new http_1.URLSearchParams();
        params.set('client_id', this._clientId);
        params.set('q', searchTerm);
        params.set('limit', LIMIT);
        return this._http.get(this.basePath, { search: params });
    };
    SoundcloudService.prototype.shuffleSongList = function (songList) {
        var currentIndex = songList.length;
        var temporaryValue;
        var randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = songList[currentIndex];
            songList[currentIndex] = songList[randomIndex];
            songList[randomIndex] = temporaryValue;
        }
        return songList;
    };
    SoundcloudService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SoundcloudService);
    return SoundcloudService;
}());
exports.SoundcloudService = SoundcloudService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL3NvdW5kY2xvdWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUd0RDtJQUlFLDJCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUh4QixhQUFRLEdBQVcsbUNBQW1DLENBQUM7UUFDdEQsY0FBUyxHQUFXLGtDQUFrQyxDQUFDO0lBRy9ELENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLE9BQWU7UUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBSSxPQUFPLENBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFNLEtBQUssR0FBVyxHQUFHLENBQUM7UUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUtNLDJDQUFlLEdBQXRCLFVBQXVCLFFBQWU7UUFDdEMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLGNBQWMsQ0FBQztRQUNuQixJQUFJLFdBQVcsQ0FBQztRQUdoQixPQUFPLENBQUMsS0FBSyxZQUFZLEVBQUUsQ0FBQztZQUUxQixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDdkQsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUdsQixjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBNUNIO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUE2Q2Isd0JBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLHlCQUFpQixvQkE0QzdCLENBQUEiLCJmaWxlIjoiYXBwL3NvdW5kY2xvdWQvc291bmRjbG91ZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VuZGNsb3VkU2VydmljZSB7XG4gIHB1YmxpYyBiYXNlUGF0aDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLnNvdW5kY2xvdWQuY29tL3RyYWNrcyc7XG4gIHByaXZhdGUgX2NsaWVudElkOiBzdHJpbmcgPSAnODE1OWI0Yjk5MTUxYzQ4ZDZhYWY2NzcwODUzYmZkN2EnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmFjayh0cmFja0lkOiBudW1iZXIpIHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5zZXQoJ2NsaWVudF9pZCcsIHRoaXMuX2NsaWVudElkKTtcbiAgICBsZXQgdXJsID0gdGhpcy5iYXNlUGF0aCArIGAvJHt0cmFja0lkfWA7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwge3NlYXJjaDogcGFyYW1zfSk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZykge1xuICAgIGNvbnN0IExJTUlUOiBudW1iZXIgPSAyMDA7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuc2V0KCdjbGllbnRfaWQnLCB0aGlzLl9jbGllbnRJZCk7XG4gICAgcGFyYW1zLnNldCgncScsIHNlYXJjaFRlcm0pO1xuICAgIHBhcmFtcy5zZXQoJ2xpbWl0JywgTElNSVQpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmJhc2VQYXRoLCB7c2VhcmNoOiBwYXJhbXN9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaHVmZmxlIGFycmF5IG9mIHNvbmdzIHVzaW5nIEZpc2hlci1ZYXRlcyBTaHVmZmxlXG4gICAqLyBcbiAgcHVibGljIHNodWZmbGVTb25nTGlzdChzb25nTGlzdDogYW55W10pOiBhbnlbXSB7XG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IHNvbmdMaXN0Lmxlbmd0aDtcbiAgICBsZXQgdGVtcG9yYXJ5VmFsdWU7XG4gICAgbGV0IHJhbmRvbUluZGV4O1xuXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHNvbmdMaXN0W2N1cnJlbnRJbmRleF07XG4gICAgICBzb25nTGlzdFtjdXJyZW50SW5kZXhdID0gc29uZ0xpc3RbcmFuZG9tSW5kZXhdO1xuICAgICAgc29uZ0xpc3RbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzb25nTGlzdDtcbiAgfVxufVxuIl19
