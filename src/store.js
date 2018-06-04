import { createStore, compose } from 'redux';
import reducers from './reducers';
import { Map } from 'immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers,composeEnhancers(Map(window.REDUX_STATE)));
