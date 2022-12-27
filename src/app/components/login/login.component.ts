import { TokenService } from './../../service/token.service';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from './../../model/LoginRequest';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  title = "Login";
  hide = true;
  form: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private authService : AuthService,
    private tokenServie: TokenService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      client_id: ['',Validators.required],
      client_secret: ['',Validators.required]
    })
  }

  ngOnInit(): void {}

  onLogin(){
    this.authService.login(this.form.value).subscribe({
      next: (data) => {
        this.tokenServie.setToken(data.access_token);
        this.cambiarLoading();
      }
    });
  }

  cambiarLoading() {
    this.loading=true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
