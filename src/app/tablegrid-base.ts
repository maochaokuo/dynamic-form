export class TablegridBase<T> {
  value: T;
  key: string;
  constructor(options: {
    value?: T
  } = {}) {
    this.value = options.value;
  }
}
