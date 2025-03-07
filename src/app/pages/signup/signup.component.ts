import { Component } from '@angular/core';
import { DefaultLoginPageComponent } from '../../components/default-login-page/default-login-page.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
 
interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}
@Component({
  selector: 'app-signup',
  imports: [DefaultLoginPageComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers: [
    LoginService,
  ], 
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl("", [Validators.required,  Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
   }

   submit(){
    this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => console.log("sucesso"),
      error: () => console.error("error")
    });
   }
   navigate (){
    this.router.navigate(["login"]);
   }
} 
