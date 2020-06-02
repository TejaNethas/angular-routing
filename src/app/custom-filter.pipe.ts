import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], filterVAlue:string): any {
    return items.filter(i => i.name.includes(filterVAlue))
  }

}
