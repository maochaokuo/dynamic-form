import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  // type: string;

  constructor(options: {} = {}) {
    super(options);
    const key1 = 'type';
    this.type = options[key1] || '';
  }
}
