import { TablegridBase } from './tablegrid-base';

export class CheckboxTablegrid extends TablegridBase<boolean> {
  controlType = 'checkbox';
  key: string;

  constructor(options: {
    //
    key?: string,
  } = {}) {
    super(options);
    // this.value = options.value;
    this.key = options.key || '';
  }
}
