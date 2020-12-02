import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  IS_SUBMITTING,
} from '../actions/types';

const initialState = {
  isLoading: false,
  token: localStorage.getItem('tyremanToken'),
  isAuthenticated: null,
  user: null,
  isSubmitting: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: true,
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('tyremanToken', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
        isSubmitting: false,
      };

    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem('tyremanToken');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
        isSubmitting: false,
      };

    default:
      return state;
  }
}
