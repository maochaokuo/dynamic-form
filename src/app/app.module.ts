import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule} from 'ngx-bootstrap/buttons';
import { DatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './pages/home/home.component';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule
  , ButtonsModule.forRoot(), DatepickerModule.forRoot(), BrowserAnimationsModule, AlertModule.forRoot()
  , BsDropdownModule.forRoot(), AppRoutingModule
 ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, HomeComponent,
    IdeasComponent, PlansComponent, ProjectsComponent, RequirementsComponent, IssuesComponent,
    SolutionsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
