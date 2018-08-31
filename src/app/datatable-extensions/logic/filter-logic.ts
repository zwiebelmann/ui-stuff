import FilterListItem from "../models/filter-list-item";
import * as moment from 'moment'

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
            result = rowValue > typedValue;
            break;
        case 'gteq':
            result = rowValue >= typedValue;
            break;
        case 'eq':
            result = rowValue === typedValue;
            break;
        case 'lt':
            result = rowValue < typedValue;
            break;
        case 'lteq':
            result = rowValue <= typedValue;
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

export function DateFilter(key: string, row: any, mode: string, value: any, secondValue: any) {
    const rowValue = moment(row[key]).startOf('day');
    const typedValue1 = moment(value).startOf('day');
    const typedValue2 = moment(secondValue).startOf('day');
    let result: boolean;

    if(value == null) return true;

    switch (mode) {
        case 'gt':
            result = rowValue > typedValue1;
            break;
        case 'gteq':
            result = rowValue >= typedValue1;
            break;
        case 'eq':
            result = rowValue.isSame(typedValue1);
            break;
        case 'lt':
            result = rowValue < typedValue1;
            break;
        case 'lteq':
            result = rowValue <= typedValue1;
            break;
        case 'btwn':
            result = typedValue1 <= rowValue && rowValue <= typedValue2;
            break;
        case null:
            result = true;
            break;
        default:
            throw new Error(`Invalid filter mode ${mode}`);
    }

    return result;
}