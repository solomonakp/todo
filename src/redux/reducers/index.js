import { combineReducers } from 'redux';

import authReducer from './authReducer';

import errorReducer from './errorReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  ui: uiReducer,
});
