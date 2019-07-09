import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>Job Application for Heroes</h2>
    <app-dynamic-form [questions]="questions"></app-dynamic-form>
    <nav>
      <a routerLink="/ideas" routerLinkActive="active">ideas</a>
      <a routerLink="/issues" routerLinkActive="active">issues</a>
      <a routerLink="/plans" routerLinkActive="active">plans</a>
      <a routerLink="/projects" routerLinkActive="active">projects</a>
      <a routerLink="/requirements" routerLinkActive="active">requirements</a>
      <a routerLink="/solutions" routerLinkActive="active">solutions</a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
