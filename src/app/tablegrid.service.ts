import { Injectable } from '@angular/core';

@Injectable()
export class TablegridService {

  // TODO: QuestionService get from a remote source of question metadata
  // TODO: QuestionService make asynchronous
  getRows() {
    // const // todo !!... how to decide a table row
    const students = [{
      __link_key__: 'Nick',
      name: 'Nick',
      achievements: 158,
      points: 14730
    }, {
      __link_key__: 'Jordan',
      name: 'Jordan',
      achievements: '175',
      points: '16375'
    }, {
      __link_key__: 'Ramon',
      name: 'Ramon',
      achievements: '55',
      points: '2025'
    }];
    return students; // .sort(a => a.name);
  }
}
