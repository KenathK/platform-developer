import { Action } from '@ngrx/store';
import { User } from '../entities/user';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
  USER_DETAILS = '[Auth User] Action',
  USER_DETAILS_SUCCESS = '[Auth User] Success'
}

export class Login implements Action {

  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: any) {

  }
}

export class Logout implements Action {

  readonly type = AuthActionTypes.LogoutAction;

}

export class UserDetails implements Action {
  readonly type = AuthActionTypes.USER_DETAILS;

}

export class UserDetailsSuccess implements Action {
  readonly type = AuthActionTypes.USER_DETAILS_SUCCESS;
  constructor(public payload: { user: User }) {

  }
}

export type AuthActions = Login | Logout | UserDetails | UserDetailsSuccess;
