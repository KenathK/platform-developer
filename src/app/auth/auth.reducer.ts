import { Action } from '@ngrx/store';
import { User } from '../entities/user';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean,
  token: string,
  user: User
}

export const initialState: AuthState = {
  loggedIn: false,
  token: undefined,
  user: undefined
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        ...state,
        loggedIn: true,
        token: action.payload
      }
    
    case AuthActionTypes.LogoutAction:
      return {
        ...state,
        loggedIn: false,
        token: undefined
      }
    
    case AuthActionTypes.USER_DETAILS:
      return {
        ...state
      }
    
    case AuthActionTypes.USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      }

    default:
      return state;
  }
}
