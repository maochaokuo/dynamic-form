import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule} from 'ngx-bootstrap/buttons';
import { DatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule
  , ButtonsModule.forRoot(), DatepickerModule.forRoot(), BrowserAnimationsModule, AlertModule.forRoot()
  , BsDropdownModule.forRoot()
 ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
