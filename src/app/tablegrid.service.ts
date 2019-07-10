import { Injectable } from '@angular/core';
import { TablegridColumn } from './tablegrid-column';

@Injectable()
export class TablegridService {
  // todo undone
/*
  getTableDefinitions() {
    const tabledef = TablegridColumn[{
      columKey: 'name',
      columnTitle: 'name',
      columnWidth: '80px',
      columnAlign: 'center',
      columnVisible: true,
      columnType: 'text',
      columnWrap: false
    }, {
      columKey: 'achievements',
      columnTitle: 'achievements',
      columnWidth: '80px',
      columnAlign: 'right',
      columnVisible: true,
      columnType: 'text',
      columnWrap: false
    }, {
      columKey: 'points',
      columnTitle: 'points',
      columnWidth: '80px',
      columnAlign: 'right',
      columnVisible: true,
      columnType: 'text',
      columnWrap: false
    }];
    return tabledef;
  }*/

  // TODO: QuestionService get from a remote source of question metadata
  // TODO: QuestionService make asynchronous
  getRows() {
    // const // todo !!... how to decide a table row
    const students = [{
      __link_key__: 'Nick',
      name: 'Nick',
      achievements: 158,
      points: 14730
    }, {
      __link_key__: 'Jordan',
      name: 'Jordan',
      achievements: '175',
      points: '16375'
    }, {
      __link_key__: 'Ramon',
      name: 'Ramon',
      achievements: '55',
      points: '2025'
    }];
    return students; // .sort(a => a.name);
  }
}
