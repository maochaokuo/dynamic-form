import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TablegridBase } from './tablegrid-base';
import { TablegridControlService } from './tablegrid-control.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  providers: [ TablegridControlService ]
})
export class DynamicTablegridComponent implements OnInit {

  @Input() tablegrids: TablegridBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: TablegridControlService) {  }

// todo undone !!...
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.tablegrids);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
