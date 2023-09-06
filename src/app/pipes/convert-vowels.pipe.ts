import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertVowels'
})
export class ConvertVowelsPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return value;

    const conversion: any = {
      a: '4',
      e: '3',
      i: '1',
      o: '0',
      u: '9'
    }

    let result = '';

    for (const char of value) {
      result += conversion[char]  || char;
    }


    return result;
  }

}
