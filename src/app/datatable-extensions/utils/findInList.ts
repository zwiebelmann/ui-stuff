import FilterListItem from "../models/filter-list-item";

export default function (list: FilterListItem[], key: number) {
    if (key == null) return '';
    return list.find(i => i.key == key).value;
  }