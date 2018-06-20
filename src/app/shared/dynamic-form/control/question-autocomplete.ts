import { QuestionBase } from './question-base';

export class AutocompleteQuestion extends QuestionBase<string> {
  controlType = 'autocomplete';
  list: string[];
  suggestions: string[];
  search: any;

  constructor(options: {} = {}) {
    super(options);
    this.list = options['list'] || [];
    this.search = (event) => {
      this.suggestions = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          this.suggestions.push(this.list[i]);
        }
      }
    };
  }
}
