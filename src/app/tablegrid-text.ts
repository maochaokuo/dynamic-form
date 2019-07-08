import { TablegridBase } from './tablegrid-base';

export class TextTablegrid extends TablegridBase<string> {
  controlType = '';

  constructor(options: {} = {}) {
    super(options);
  }
}
