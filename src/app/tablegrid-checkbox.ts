import { TablegridBase } from './tablegrid-base';

export class CheckboxTablegrid extends TablegridBase<boolean> {
  controlType = '';

  constructor(options: {} = {}) {
    super(options);
  }
}
