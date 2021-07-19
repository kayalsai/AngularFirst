import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class CustompipePipe implements PipeTransform {

  transform(value: number) :number{
    return Math.sqrt(value);
  }

}
