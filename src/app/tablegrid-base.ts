export class TablegridBase<T> {
  value: T;
  key: string;
  options: {key: string, value: string}[] = [];
  constructor(options: {
    value?: T,
    key?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
  }
}
