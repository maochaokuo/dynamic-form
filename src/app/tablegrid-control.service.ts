import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TablegridBase } from './tablegrid-base';

@Injectable()
export class TablegridControlService {
  constructor() { }

  toFormGroup(tablegrid: TablegridBase<any>) {
    const group: any = {};

    return new FormGroup(group);
  }
}
