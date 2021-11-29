import { Component, Input } from '@angular/core';
import { errorsMessages } from '../../helpers/form/errorsHandler';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-msg',
  templateUrl: './input-error-msg.component.html',
  styleUrls: ['./input-error-msg.component.scss']
})
export class InputErrorMsgComponent {

  @Input() control: FormControl;

  showErrorMessage(key: string): string {

    switch (key) {
      case 'minlength' : {
        const requiredLength  = this.control.errors.minlength.requiredLength;
        const actualLength    = this.control.errors.minlength.actualLength;
        return `Minlength is ${requiredLength}! ActualLength is ${actualLength}`;
      }
      default: {
        return errorsMessages[key];
      }
    }

  }
}
