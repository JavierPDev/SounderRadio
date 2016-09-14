import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: any, args: string[]) {
    if (value) {
      let minutes = Math.floor(value / 1000 / 60);
      let seconds = Math.floor((value / 1000) % 60);
      let secondsLeadingZero = seconds.toString().length < 2 ? '0'+seconds : seconds;
      return `${minutes}:${secondsLeadingZero}`;
    }
  }
}

