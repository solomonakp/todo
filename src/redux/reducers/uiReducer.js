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

const initialState = {
  isRegister: false,
  spinner: true,
  initialLoad: true,
  bannerIsLight: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_AUTH:
      return { ...state, isRegister: !state.isRegister };
    case TOGGLE_REGISTER:
      return { ...state, isRegister: true };
    case TOGGLE_LOGIN:
      return { ...state, isRegister: false };
    // SHOW SPINNER
    case SHOW_SPINNER:
      return {
        ...state,
        spinner: true,
      };
    // HIDE SPINNER
    case HIDE_SPINNER:
      return {
        ...state,
        spinner: false,
      };
    // for first load whenever any route is loaded
    case INITIAL_LOAD:
      return {
        ...state,
        initialLoad: false,
      };
    // changes navbar text and logo if page banner is light
    case LIGHT_NAV:
      return {
        ...state,
        bannerIsLight: true,
      };
    // changes navbar text and logo if page banner is dark
    case DARK_NAV:
      return {
        ...state,
        bannerIsLight: false,
      };
    default:
      return state;
  }
};
