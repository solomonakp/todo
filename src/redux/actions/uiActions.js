import {
  TOGGLE_REGISTER,
  TOGGLE_AUTH,
  TOGGLE_LOGIN,
  SHOW_SPINNER,
  HIDE_SPINNER,
  INITIAL_LOAD,
  LIGHT_NAV,
  DARK_NAV,
} from '../actions/types';

export const toggleLogin = () => ({ type: TOGGLE_LOGIN });
export const toggleRegister = () => ({ type: TOGGLE_REGISTER });
export const toggleAuth = () => ({ type: TOGGLE_AUTH });
export const showSpinner = () => ({ type: SHOW_SPINNER });
export const hideSpinner = () => ({ type: HIDE_SPINNER });
export const initialLoad = () => ({ type: INITIAL_LOAD });
export const lightNav = () => ({ type: LIGHT_NAV });
export const darkNav = () => ({ type: DARK_NAV });
