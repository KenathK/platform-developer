import { Action } from '@ngrx/store';
import { User } from '../entities/user';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean,
  token: string
}

export const initialState: AuthState = {
  loggedIn: false,
  token: undefined
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        token: action.payload
      }
    
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        token: undefined
      }

    default:
      return state;
  }
}
