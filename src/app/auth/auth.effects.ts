import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout, UserDetails, UserDetailsSuccess } from './auth.actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthEffects {

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => {
      localStorage.setItem('token', JSON.stringify(action.payload))
    })
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer(() => {
    const token = localStorage.getItem('token');
    if(token !== 'undefined' && token !== null){
      return of(new Login(JSON.parse(token)));
    }
    return of(new Logout());
  });

  // @Effect()
  // userDetails$ = this.actions$.pipe(
  //   ofType<UserDetails>(AuthActionTypes.USER_DETAILS),
  //   tap(action => {
  //     console.log(action);
  //     this.authService.getUser()
  //   .pipe(
  //     tap(data => {
  //       return new UserDetailsSuccess(data);
  //     })
  //   )
  //   })
  // );

  @Effect()
  userDetails$ = this.actions$
    .pipe(
      ofType<UserDetails>(AuthActionTypes.USER_DETAILS),
      mergeMap(action => this.authService.getUser()),
      map(user => new UserDetailsSuccess({user}))

  );

  @Effect({ dispatch: false })
  userDetailsSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.USER_DETAILS_SUCCESS)
  );

  constructor(
    private actions$: Actions,
     private router: Router,
     private authService: AuthService
    ) {

  }
}
