/** A hero's name can't match the hero's alter ego */
import { AbstractControl } from '@angular/forms';

export const passwordConfirmation = (control: AbstractControl) => {
  let password = control.get('password');
  let confirmPassword = control.get('confirmPassword');

  // return password && confirmPassword && password.value === confirmPassword.value
  //   ? { identityRevealed: true }
  //   : null;
  let doesntMatch = password?.value !== confirmPassword?.value;
  return doesntMatch ? { doesntMatch: true } : null;
};
