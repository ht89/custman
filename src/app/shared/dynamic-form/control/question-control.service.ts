import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = [];

    questions.forEach(question => {
      group[question.key] = question.validation.length > 0
        ? new FormControl(question.value || '', question.validation)
        : new FormControl(question.value || '');
    });

    return new FormGroup(group);
  }
}
