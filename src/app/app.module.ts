import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { LoginBackgroundComponent } from './login-page/login-background/login-background.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupBackgroundComponent } from './signup-page/signup-background/signup-background.component';
import { SignupFormComponent } from './signup-page/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    LoginBackgroundComponent,
    SignupPageComponent,
    SignupBackgroundComponent,
    SignupFormComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
