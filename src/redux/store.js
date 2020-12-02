import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// imports index.js of reducers
import rootReducer from './reducers';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// createStore takes initialState as a parameter
const initialState = {};

// array of any middleware
const middleware = [thunk];
// dev tools extension
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  preloadedState || initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

// Tell react-snap how to save Redux state
window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState(),
});

export default store;
