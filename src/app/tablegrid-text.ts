import { TablegridBase } from './tablegrid-base';

export class TextTablegrid extends TablegridBase<string> {
  controlType = 'text';

  constructor(options: {} = {}) {
    super(options);
  }
}
