import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../../shared/dynamic-form/control/question-base';
import { QuestionControlService } from '../../shared/dynamic-form/control/question-control.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit, OnChanges {
  @Input() questions: QuestionBase<any>[] = [];
  modForm: FormGroup;

  @Output() saveModification = new EventEmitter<any>();

  @Output() closeDialog = new EventEmitter<any>();

  isLoading = true;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['questions'] && this.questions) {
      this.modForm = this.qcs.toFormGroup(this.questions);

      this.isLoading = false;
    }
  }

  save(model: any, isValid: boolean) {
    this.saveModification.emit(model);
  }
}
