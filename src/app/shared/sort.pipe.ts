import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, direction = 'ASC'): any {
    const sorted = value.sort();

    return direction === 'ASC' ? sorted : sorted.reverse();
  }

}
