import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { passwordConfirmation } from 'src/app/password-validator/password-validator.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signUpForm: FormGroup;
  isButtonActive: boolean = false;
  constructor(private sf: FormBuilder, private router: Router) {
    this.signUpForm = this.sf.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
          ],
        ],
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
        confirmPassword: ['',
      [
        
      ]],
        companyName: ['', Validators.required],
      },
      {
        validators: [passwordConfirmation],
      }
    );
  }
  ngOnInit(): void {}

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
