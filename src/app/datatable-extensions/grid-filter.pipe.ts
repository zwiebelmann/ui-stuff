import { Pipe, PipeTransform } from '@angular/core';
import { FilterArgument } from './filter-argument';

@Pipe({
  name: 'gridFilter'
})
export class GridFilterPipe implements PipeTransform {

  transform(rows: any, filterArguments: Map<string, FilterArgument>) {


    filterArguments.forEach((filter, key) => {
      if (!filter) { return; }
      console.log(`key: [${key}] item: [${JSON.stringify(filter)}] `);
      rows = rows.filter(r => {
        console.log(`r: [${JSON.stringify(r)}] r[key]: [${r[key]}]`);

        let result: boolean;

        // hier verschiedene Filter aufrufen, je nach datentyp und modus
        if (filter.datatype === 'string') {

          const rowValue = r[key] as string;

          // text ==> ctns, edwh, stwh
          switch (filter.mode) {
            case 'ctns':
              result = rowValue.indexOf(filter.value) >= 0;
              break;
            case 'edwh':
              result = rowValue.endsWith(filter.value);
              break;
            case 'stwh':
              result = rowValue.startsWith(filter.value);
              break;
            default:
              throw new Error(`Invalid filter mode ${filter.mode}`);
          }
          // number ==> gt, gteq, eq, lt, lteq
          // date ==> gt, gteq, eq, lt, lteq, btwn
          // dropdown ==> multiple!
          // bool ==> simple

          return result;
        }
      });
    });

    return rows;
  }

}
