import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
    <nav>
      <a routerLink="/ideas">ideas</a>
      <a routerLink="/issues">issues</a>
      <a routerLink="/plans">plans</a>
      <a routerLink="/projects">projects</a>
      <a routerLink="/requirements">requirements</a>
      <a routerLink="/solutions">solutions</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
