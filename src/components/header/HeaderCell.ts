import { Component, Input, ElementRef } from '@angular/core';
import { TableColumn } from '../../models/TableColumn';

@Component({
  selector: 'datatable-header-cell',
  template: `
  	<div
      draggable="true">
      <span
        class="datatable-header-cell-label"
        (click)="onSort()"
        [innerHTML]="column.name">
      </span>
      <span
        class="sort-btn"
        [class.sort-asc]="column.sort === 'asc'"
        [class.icon-up]="column.sort === 'asc'"
        [class.sort-desc]="column.sort === 'desc'"
        [class.icon-down]="column.sort === 'desc'">
      </span>
    </div>
  `,
  directives: [],
  host: {
    '[class.sortable]': 'column.sortable',
    '[class.resizable]': 'column.resizable',
    '[style.width]':'column.width',
    '[style.minWidth]':'column.minWidth',
    '[style.maxWidth]':'column.maxWidth',
    '[style.height]':'column.height',
    '[attr.title]': 'column.name'
  }
})
export class DataTableHeaderCell {

  @Input() column: TableColumn;

  onSort() {
    
  }

  constructor(public element: ElementRef){
    element.nativeElement.classList.add('datatable-header-cell');
  }

}