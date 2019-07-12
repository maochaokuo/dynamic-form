import { Injectable } from '@angular/core';
import { TablegridColumn } from './tablegrid-column';

@Injectable()
export class TablegridService {
  getTableColumns() {
    const tabledef: TablegridColumn[] = [
      new TablegridColumn({
      columnKey: 'name',
      columnTitle: 'name',
      columnWidth: '80px',
      columnAlign: 'center',
      columnVisible: true,
      columnType: 'text',
      columnWrap: false
    }),
      new TablegridColumn({
      columnKey: 'achievements',
      columnTitle: 'achievements',
      columnWidth: '80px',
      columnAlign: 'right',
      columnVisible: true,
      columnType: 'text',
      columnWrap: false
    }),
      new TablegridColumn({
      columnKey: 'points',
      columnTitle: 'points',
      columnWidth: '80px',
      columnAlign: 'right',
      columnVisible: true,
      columnType: 'text',
      columnWrap: false
    })
  ];
    return tabledef;
  }

  getTableRows() {
    const students: any[] = [{
      __hidden_key__: 'Nick',
      name: 'Nick',
      achievements: 158,
      points: 14730
    }, {
      __hidden_key__: 'Jordan',
      name: 'Jordan',
      achievements: '175',
      points: '16375'
    }, {
      __hidden_key__: 'Ramon',
      name: 'Ramon',
      achievements: '55',
      points: '2025'
    }];
    return students; // .sort(a => a.name);
  }
}
