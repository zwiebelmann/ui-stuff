import { Component, OnInit, AfterContentInit, ContentChildren,
   Input, QueryList, ViewChildren, Output, EventEmitter, ElementRef, Injector, Query } from '@angular/core';
import { FilterColumnComponent } from '../filter-column/filter-column.component';
import { FilterArgument } from '../../models/filter-argument';
import cloneMap from '../../utils/cloneMap';
import { StringFilterComponent } from '../filters/string-filter/string-filter.component';
import { NumberFilterComponent } from '../filters/number-filter/number-filter.component';
import { BoolFilterComponent } from '../filters/bool-filter/bool-filter.component';
import { ListFilterComponent } from '../filters/list-filter/list-filter.component';
import { InlineEditListComponent } from '../cell-templates/inline-edit-list/inline-edit-list.component';
import findInList from '../../utils/findInList';
import { DateFilterComponent } from '../filters/date-filter/date-filter.component';
import * as moment from 'moment';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ContextMenuDropdownComponent } from '../ui/context-menu-dropdown/context-menu-dropdown.component';
import { PORTAL_DATA } from '../../utils/portalInjectionToken';
import { Sorting } from '../../models/sorting';

@Component({
  selector: 'app-filter-grid',
  templateUrl: './filter-grid.component.html',
  styleUrls: ['./filter-grid.component.css']
})
export class FilterGridComponent implements OnInit, AfterContentInit {
  @ContentChildren(FilterColumnComponent) columns: QueryList<FilterColumnComponent>;

  @ViewChildren(StringFilterComponent) stringmenus: QueryList<StringFilterComponent>;
  @ViewChildren(NumberFilterComponent) numbermenus: QueryList<NumberFilterComponent>;
  @ViewChildren(DateFilterComponent) datemenus: QueryList<DateFilterComponent>;
  @ViewChildren(BoolFilterComponent) boolmenus: QueryList<BoolFilterComponent>;
  @ViewChildren(ListFilterComponent) listmenus: QueryList<ListFilterComponent>;
  @ViewChildren(InlineEditListComponent) inlineListMenus: QueryList<InlineEditListComponent>;

  @ViewChildren('anchor') menuAnchors: QueryList<ElementRef<HTMLElement>>;

  @Input() rows: any;
  @Input() pageSize: number;
  @Output() clickFunction = new EventEmitter<any[]>();

  // Selektierte Rows mit two way databinding
  @Input() selectedRows: any[];
  @Input() initialSorts: Sorting[];
  @Output() selectedRowsChange = new EventEmitter<any[]>();

  public filters: Map<string, FilterArgument>;
  public sorts = new Array<any>();
  public columnsInternal: FilterColumnComponent[];

  overlayRef: OverlayRef;
  elementRef: ElementRef<HTMLElement>;
  menuPortal: ComponentPortal<ContextMenuDropdownComponent>;

  public messages = {
    emptyMessage: 'Keine Daten vorhanden',
    totalMessage: 'Datensätze'
  };

  findInList = findInList;

  constructor(private injector: Injector , private overlay: Overlay) { }

  ngOnInit() {
    if (this.rows == null) { throw new Error('Attribute "rows" is required'); }
    this.filters = new Map<string, FilterArgument>();

    if (this.initialSorts) {
      this.sorts = this.initialSorts;
    }
  }

  ngAfterContentInit(): void {
    this.columns.forEach(item => {
      this.filters.set(item.name, new FilterArgument(item.name, item.type));
    });
    this.initListFilters();
  }

  initListFilters() {
    const columnDefinitions = this.columns.filter(c => c.listOnlyContaining && c.type === 'list');
    if (columnDefinitions.length === 0) {
      return;
    }
    console.log(columnDefinitions);

    this.columns.forEach(c => {
      if (c.listOnlyContaining && c.type === 'list') {
        c.list.forEach(le => { // alle zurücksetzen
            le.show = false;
        });
      }
    });

    this.rows.forEach(r => {
      this.columns.forEach(c => {
        if (c.listOnlyContaining && c.type === 'list') {
          c.list.forEach(le => { // alle prüfen
            if (le.key === r[c.prop]) {
              le.show = true;
            }
          });
        }
      });
    });
  }

  clickRow(row: any): void {
    this.clickFunction.emit(row);
  }

  openDropdown(c, row, i, $event: PointerEvent) {
    const eventTarget = $event.target as HTMLElement;
    const div = eventTarget.firstChild.lastChild;

    this.elementRef = this.menuAnchors.find(el => el.nativeElement.id === `outlet_${i}`);

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          overlayX: 'start', overlayY: 'top',
          originX: 'start', originY: 'bottom',
          offsetX: 120, offsetY: 10
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'backdrop',
      hasBackdrop: true
    });

    this.menuPortal = new ComponentPortal(
      ContextMenuDropdownComponent,
      null,
      this.createInjector({
        contextMenuActions: c.contextMenu,
        item: row,
        closeFn: (_ => this.closeDropDown()).bind(this)
      }));

    this.overlayRef.attach(this.menuPortal);
    this.overlayRef.backdropClick().subscribe(this.closeDropDown.bind(this));
  }

  createInjector(data): PortalInjector {
    const injectorTokens = new WeakMap<any, any> ([
      [PORTAL_DATA, data]
    ]);

    return new PortalInjector(this.injector, injectorTokens);
  }

  closeDropDown() {
    this.overlayRef.detach();
  }

  closeOtherMenus($event: any) {
    if ($event != null
      && $event.path != null
      && !$event.path.find(i => i.tagName === 'APP-FILTER-MENU')) { // außerhalb des FilterMenüs
      this.stringmenus.forEach(fm => fm.showMenu = 'none');
      this.numbermenus.forEach(fm => fm.showMenu = 'none');
      this.datemenus.forEach(fm => fm.showMenu = 'none');
      this.boolmenus.forEach(fm => fm.showMenu = 'none');
      this.listmenus.forEach(fm => fm.showMenu = 'none');
      this.inlineListMenus.forEach(fm => fm.showMenu = 'none');
    }
  }

  onSelect({ selected }) {
    if (this.selectedRows) {
      this.selectedRows.splice(0, this.selectedRows.length);
      this.selectedRows.push(...selected);
      this.selectedRowsChange.emit(this.selectedRows);
    }
  }

  applyFilter($event: FilterArgument) {
    const clonedFilters = cloneMap(this.filters);

    clonedFilters.set($event.name, $event);

    this.filters = clonedFilters;
    this.initListFilters();
  }

  getLink(link: string, param: any) {
    if (link != null && param != null) {
      const baselink = link.endsWith('/') ? link.substring(0, link.length - 1) : link;
      return `${baselink}/${param}`;
    }
    return '';
  }

  convertDate(date: any, dateformat: string) {
    const format = dateformat || 'L';

    return date ? moment(date).format(format) : '';
  }

  sortOccured($event) {
    this.sorts = $event.sorts;
  }
}
