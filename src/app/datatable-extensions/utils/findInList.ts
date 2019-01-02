import FilterListItem from "../models/filter-list-item";
import { isUndefined } from "util";

export default function (list: FilterListItem[], key: number) {
  if (key == null) return '';

  var listitem = list.find(i => i.key == key);
  
  if (listitem) {
    return listitem.value;
  }
  else {
    return '';
  }
    
}
