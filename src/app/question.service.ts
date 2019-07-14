import { CheckboxQuestion } from './question-checkbox';
import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3,
        isenabled: true,
        isvisible: true
      }),

      new DropdownQuestion({
        key: 'brave2',
        label: 'Bravery Rating2',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3,
        isenabled: false,
        isvisible: true
      }),

      new DropdownQuestion({
        key: 'brave3',
        label: 'Bravery Rating3',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3,
        isenabled: false,
        isvisible: false
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        isenabled: true,
        isvisible: true
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        value: 'a@a.com',
        type: 'email',
        order: 2,
        isenabled: false,
        isvisible: true
      }),
      new TextboxQuestion({
        key: 'emailAddress2',
        label: 'Email2',
        value: 'a@a.com2',
        type: 'email',
        order: 2,
        isenabled: false,
        isvisible: false
      }),

      new CheckboxQuestion({
        key: 'isDirty',
        label: 'Is dirty or not',
        // type: 'checkbox',
        value: 'true',
        order: 4,
        isenabled: true,
        isvisible: true
      }),

      new CheckboxQuestion({
        key: 'isDirty2',
        label: 'Is dirty or not2',
        // type: 'checkbox',
        value: 'true',
        order: 4,
        isenabled: false,
        isvisible: true
      }),

      new CheckboxQuestion({
        key: 'isDirty3',
        label: 'Is dirty or not3',
        // type: 'checkbox',
        value: 'true',
        order: 4,
        isenabled: false,
        isvisible: false
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
