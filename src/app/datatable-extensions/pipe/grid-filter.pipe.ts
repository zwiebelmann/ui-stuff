import { Pipe, PipeTransform } from '@angular/core';
import { FilterArgument } from '../models/filter-argument';
import { StringFilter, NumberFilter, BooleanFilter, ListFilter, DateFilter } from '../logic/filter-logic';

@Pipe({
  name: 'gridFilter'
})
export class GridFilterPipe implements PipeTransform {

  transform(rows: any, filterArguments: Map<string, FilterArgument>) {

    filterArguments.forEach((filter, key) => {
      if (!filter) { return; }
      rows = rows.filter(r => {

        let result: boolean;

        switch (filter.datatype) {
          case 'string':
            result = StringFilter(key, r, filter.value, filter.mode);
            break;
          case 'number':
            result = NumberFilter(key, r, filter.value, filter.mode);
            break;
          case 'bool':
            result = BooleanFilter(key, r, filter.value);
            break;
          case 'list':
            result = ListFilter(key, r, filter.value);
            break;
          case 'date':
            result = DateFilter(key, r, filter.mode, filter.value, filter.secondValue)
            break;
          default:
            throw new Error(`Invalid datatype ${filter.datatype}`);
        }

        return result;
      });
    });

    return rows;
  }

}
