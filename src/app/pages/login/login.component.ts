import { Component } from '@angular/core';
import { DefaultLoginPageComponent } from '../../components/default-login-page/default-login-page.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [DefaultLoginPageComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers: [
    LoginService,
  ], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
   }

   submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => console.log("sucesso"),
      error: () => console.error("error")
    });
   }
   navigate (){
    this.router.navigate(["signup"]);
   }
}
