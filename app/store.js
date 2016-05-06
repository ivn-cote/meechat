import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

export default function(data) {
  let reducer = combineReducers(reducers),
    storeFabric = applyMiddleware(thunkMiddleware)(createStore);

  return storeFabric(reducer, data);
}
