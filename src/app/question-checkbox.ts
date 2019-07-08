import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
  controlType = 'checkbox';
  // type: string;

  constructor(options: {} = {}) {
    super(options);
    // const key1 = 'type';
    // this.type = options[key1] || '';
  }
}
