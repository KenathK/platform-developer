import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../entities/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Login } from '../auth.actions';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  //user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private auth: AuthService,
    private router:Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  onSubmit(): void {
    const val = this.loginForm.value;
    this.auth.login(val.email, val.password)
    .pipe(
      tap(data => {
        this.store.dispatch(new Login(data.token));
        this.router.navigateByUrl('/dashboard');
      })
    ).subscribe(
      noop,
      () => alert('Login failed')
    );
  }

}
