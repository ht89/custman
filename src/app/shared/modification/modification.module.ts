import { NgModule } from '@angular/core';

import { ModificationComponent } from './modification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from '../dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule
  ],
  exports: [ModificationComponent],
  declarations: [ModificationComponent, DynamicFormQuestionComponent],
  providers: [],
})
export class ModificationModule { }
