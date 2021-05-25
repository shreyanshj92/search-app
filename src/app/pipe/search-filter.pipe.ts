import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    if(value.length === 0) {
      return [];
    }
    if(!args[0].searchTerm && !args[0].category) {
      return value;
    } else if(args[0].searchTerm && !args[0].category) {
      return value.filter(elem => elem.document?.toLowerCase()?.includes(args[0].searchTerm?.toLowerCase()));
    } else if(!args[0].searchTerm && args[0].category) {
      return value.filter(elem => elem.category === args[0].category);
    } else {
      return value.filter(elem => elem.category === args[0].category && elem.document?.toLowerCase()?.includes(args[0].searchTerm?.toLowerCase()));
    }    
  }
}
