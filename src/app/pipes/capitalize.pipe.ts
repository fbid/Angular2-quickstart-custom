import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {

  transform(text:string, numLetters: number){
      return text.substring(0, numLetters).toUpperCase() + text.substring(numLetters, text.length)
  }
}
