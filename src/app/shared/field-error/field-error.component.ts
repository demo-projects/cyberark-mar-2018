import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

const ERRORS = {
  required: () => 'This field is required',
  minlength: ({ requiredLength }) => `Must be at least ${requiredLength} characters`,
  email: () => 'Not a valid email',
  password: (errorMsg) => errorMsg
};

@Component({
  selector: 'ca-field-error',
  template: `
    <div class="error">
      {{ getErrorString() }}
    </div>
  `,
  styles: [
    `.error {
      font-size: 10px;
      color: red;
      margin-left: 80px;
      margin-bottom: 15px;
    }`

  ]
})
export class FieldErrorComponent {
  @Input() control: FormControl;
  constructor() { }

  getErrorString() {
    console.log(this.control.errors);
    if (!this.control.errors) {
      return ;
    }

    const errorKey = Object.keys(this.control.errors)[0];
    const errorValue = this.control.errors[errorKey];

    return ERRORS[errorKey](errorValue);
  }

}
