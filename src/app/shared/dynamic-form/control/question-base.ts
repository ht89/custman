export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  validation: any[];
  validationMsg: string;
  order: number;
  controlType: string;
  hidden: boolean;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    validation?: any[],
    validationMsg?: string;
    order?: number,
    controlType?: string,
    hidden?: boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validation = options.validation || [];
    this.validationMsg = options.validationMsg || `${this.label} is required`;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.hidden = options.hidden || false;
  }
}
