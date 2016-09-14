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
var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, args) {
        if (value) {
            var minutes = Math.floor(value / 1000 / 60);
            var seconds = Math.floor((value / 1000) % 60);
            var secondsLeadingZero = seconds.toString().length < 2 ? '0' + seconds : seconds;
            return minutes + ":" + secondsLeadingZero;
        }
    };
    DurationPipe = __decorate([
        core_1.Pipe({ name: 'duration' }), 
        __metadata('design:paramtypes', [])
    ], DurationPipe);
    return DurationPipe;
}());
exports.DurationPipe = DurationPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb3VuZGNsb3VkL2R1cmF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUdwRDtJQUFBO0lBU0EsQ0FBQztJQVJDLGdDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUMvRSxNQUFNLENBQUksT0FBTyxTQUFJLGtCQUFvQixDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBVEg7UUFBQyxXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7O29CQUFBO0lBVXpCLG1CQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxvQkFBWSxlQVN4QixDQUFBIiwiZmlsZSI6ImFwcC9zb3VuZGNsb3VkL2R1cmF0aW9uLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnZHVyYXRpb24nfSlcbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IodmFsdWUgLyAxMDAwIC8gNjApO1xuICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh2YWx1ZSAvIDEwMDApICUgNjApO1xuICAgICAgbGV0IHNlY29uZHNMZWFkaW5nWmVybyA9IHNlY29uZHMudG9TdHJpbmcoKS5sZW5ndGggPCAyID8gJzAnK3NlY29uZHMgOiBzZWNvbmRzO1xuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc0xlYWRpbmdaZXJvfWA7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==
