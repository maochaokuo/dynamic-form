export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  isenabled: boolean;
  isvisible: boolean;
  type: string; // textbox
  options: {key: string, value: string}[] = [];
    // dropdown
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      isenabled?: boolean,
      isvisible?: boolean
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.isenabled = options.isenabled;
    this.isvisible = options.isvisible;
  }
}
