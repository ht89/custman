import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../control/question-base';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isInvalid() {
    return this.form.controls[this.question.key].dirty && !this.form.controls[this.question.key].valid;
  }

}
