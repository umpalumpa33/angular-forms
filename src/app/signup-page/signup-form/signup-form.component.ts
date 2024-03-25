import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from 'src/app/signup-page/signup-form/password-validator/password-validator.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signUpForm: FormGroup;
  isButtonActive: boolean = false;
constructor(private sf: FormBuilder, private router: Router) {
  this.signUpForm = this.sf.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
    email: ['', Validators.email],
    mobile: ['', [Validators.required, Validators.pattern('995[0-9]{9}')]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])[0-9A-Za-z!@#$%^&*(),.?":{}|<>]+$'
        ),
      ],
    ],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        '^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])[0-9A-Za-z!@#$%^&*(),.?":{}|<>]+$'
      )]],
    companyName: ['', Validators.required],
  },
  { validators: confirmPasswordValidator },
  );
}
  // passwordMatchValidator(control: AbstractControl){
  //   return control.get('password')?.value === control.get('confirmPassword')?.value 
  //   ? null 
  //   : {mismatch: true};
  // }

  
  ngOnInit() {}


passwordChecker(formGroup: FormGroup) {
  const passwordValue = formGroup.get('password')?.value;
  const confirmPasswordValue = formGroup.get('confirmPassword')?.value;

  return passwordValue === confirmPasswordValue ? null : { passwordNotMatch: true };
}


  get f() { return this.signUpForm.controls; }

  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }

  get companyName() {
    return this.signUpForm.get('companyName');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')
  }

  get mobile() {
    return this.signUpForm.get('mobile');
  }

  onFormSubmit() {
    console.log(this.signUpForm.value);
    this.router.navigate(['/signin']);
  }
  isFormValid(): boolean {
    return this.signUpForm.valid && this.isButtonActive;
  }
}


