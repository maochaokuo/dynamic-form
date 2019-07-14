import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TablegridBase } from './tablegrid-base';

@Injectable()
export class TablegridControlService {
  constructor() { }

  toFormGroup(tablegrid: TablegridBase<any>[]): FormGroup{
    const group: any = {};

    tablegrid.forEach(tg => {
      group[tg.key] = new FormControl(tg.value || '');
    });
    return new FormGroup(group);
  }
}
