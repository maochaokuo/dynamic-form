import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TablegridBase } from './tablegrid-base';

@Component({
  selector: 'app-tablegrid',
  templateUrl: './dynamic-table-row.component.html'
})
export class DynamicTableRowComponent {
  @Input() question: TablegridBase<any>;
  @Input() form: FormGroup;
  // get isValid() { return this.form.controls[this.question.key].valid; }
}
// todo undone !!...
