export class TablegridBase<T> {
  value: T;
  constructor(options: {
    value?: T
  } = {}) {
    this.value = options.value;
  }
}
