import { QuestionBase } from './question-base';
import { SelectItem } from 'primeng/components/common/selectitem';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: SelectItem[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
