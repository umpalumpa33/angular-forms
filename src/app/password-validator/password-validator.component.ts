import { AbstractControl } from '@angular/forms';

export const passwordConfirmation = (control: AbstractControl) => {
  let password = control.get('password');
  let confirmPassword = control.get('confirmPassword');
  let doesntMatch = password?.value !== confirmPassword?.value;
  return doesntMatch ? { doesntMatch: true } : null;
};
