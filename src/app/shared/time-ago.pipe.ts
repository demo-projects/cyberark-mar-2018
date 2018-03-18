import { Pipe, PipeTransform, OnDestroy } from '@angular/core';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  interval;
  constructor() {
    this.interval = setInterval(() => {

    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getDiffStr(diff) {
    let type, amount;

    if (diff > HOUR) {
      amount = diff / HOUR;
      type = 'hour';
    } else if (diff > MINUTE) {
      amount = diff / MINUTE;
      type = 'minute';
    } else if (diff > SECOND) {
      amount = diff / SECOND;
      type = 'second';
    } else {
      return 'just now';
    }
    amount = Math.round(amount);
    if (amount > 1) {
      type = `${type}s`;
    }

    return `${amount} ${type} ago`;
  }

  transform(value: Date): any {
    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();

    return this.getDiffStr(diff);
  }

}
