import FilterListItem from "../models/filter-list-item";

export function StringFilter(key: string, row: any, value: any, mode: string) {
    const rowValue = row[key] as string;
    const typedValue = value as string;
    let result: boolean;

    if(typedValue == null || typedValue === '') return true;

    switch (mode) {
        case 'ctns':
            result = rowValue.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0;
            break;
        case 'edwh':
            result = rowValue.endsWith(value);
            break;
        case 'stwh':
            result = rowValue.startsWith(value);
            break;
        case null:
            result = true;
            break;
        default:
            throw new Error(`Invalid filter mode ${mode}`);
    }

    return result;
}

export function NumberFilter(key: string, row: any, value: any, mode: string) {
    const rowValue = row[key] as number;
    const typedValue = value as number;
    let result: boolean;

    if(typedValue == null) return true;

    switch (mode) {
        case 'gt':
            result = rowValue > value;
            break;
        case 'gteq':
            result = rowValue >= value;
            break;
        case 'eq':
            result = rowValue == value;
            break;
        case 'lt':
            result = rowValue < value;
            break;
        case 'lteq':
            result = rowValue <= value;
            break;
        case null:
            result = true;
            break;
        default:
            throw new Error(`Invalid filter mode ${mode}`);
    }

    return result;
}

export function BooleanFilter(key: string, row: any, value: any) {
    const rowValue = row[key] as boolean;

    if (value == null) return true;

    return rowValue == value;
}

export function ListFilter(key: string, row: any, values: FilterListItem[]) {
    const rowValue = row[key];

    if (values == null || values.length == 0) { return true };

    return values.some(v => v.key == rowValue);
}



          // date ==> gt, gteq, eq, lt, lteq, btwn
          // dropdown ==> multiple!