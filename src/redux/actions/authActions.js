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
} from './types';
import { returnError } from './errorActions';

import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  //   get token from cookies which is in the store
  const token = getState().auth.token;

  //  headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // if token , make request
  if (token) {
    axios
      .get(`https://devapi.yikascorner.com/api/user?token=${token}`, config)
      .then((res) => {
        // console.log(res, 'success');
        dispatch({
          type: USER_LOADED,
          payload: res?.data,
        });
      })
      .catch((err) => {
        // console.log(err.response, 'error');
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR });
      });
  }
  //else  dispatch auth error
  else {
    dispatch({ type: AUTH_ERROR });
  }
};
// register user action
export const registerUser = ({ fname, lname, email, phone, password }) => (
  dispatch
) => {
  // submitting
  dispatch({ type: IS_SUBMITTING });
  // config for fetch
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  //   converting data to json
  const body = JSON.stringify({
    fname,
    lname,
    email,
    phone,
    password,
  });

  //  posting data via axios post

  axios
    .post('https://devapi.yikascorner.com/api/signup', body, config)
    .then((res) => {
      console.log(res, 'success');
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      console.log(err.response, 'error');
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(
        returnError(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
    });
};

// login user action
export const loginUser = ({ email, password }) => (dispatch) => {
  // submitting
  dispatch({ type: IS_SUBMITTING });
  // config for fetch
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  //   converting data to json
  const body = JSON.stringify({
    email,
    password,
  });

  //  posting data via axios post
  axios
    .post('https://devapi.yikascorner.com/api/login', body, config)
    .then((res) => {
      console.log(res, 'success');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      console.log(err.response, 'error');
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(
        returnError(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
    });
};
// log out user action
export const logoutUser = () => ({ type: LOGOUT_SUCCESS });
