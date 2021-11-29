import {
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';
export class CustomValidators {
  static Required: ValidationErrors[] = [
    Validators.required
  ];

  static EmailValidation: ValidationErrors[] = [
    Validators.required,
    Validators.email
  ];

  static PasswordValidation: ValidatorFn[] = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(24),

    CustomValidators.patternValidator(/\d/,     { hasNumber: true }),
    CustomValidators.patternValidator(/[A-Z]/,  { hasCapitalCase: true }),
    CustomValidators.patternValidator(/[a-z]/,  { hasSmallCase: true }),
  ];

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  static MustMatch(controlName: string, matchingControlName: string): ValidationErrors {
    return (formGroup: FormGroup): ValidationErrors  => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
