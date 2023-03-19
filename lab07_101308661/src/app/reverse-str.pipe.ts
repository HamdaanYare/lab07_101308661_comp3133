import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {
  transform(value: any): any {
    return value.split('').reverse().join('');
  }
}

export const REVERSE_STR_PIPE_DECLARATIONS = [ReverseStrPipe];


