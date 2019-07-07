import { Injectable } from '@angular/core';

@Injectable()
export class TablegridService {
  getRows() {
    // const //todo !!... how to decide a table row
    const students = [{
      name: 'Nick',
      achievements: 158,
      points: 14730
    }, {
      name: 'Jordan',
      achievements: '175',
      points: '16375'
    }, {
      name: 'Ramon',
      achievements: '55',
      points: '2025'
    }];
    return students; // .sort(a => a.name);
  }
}
