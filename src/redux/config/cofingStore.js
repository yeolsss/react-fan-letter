import { combineReducers, createStore } from 'redux';
import member from './module/letter';

const rootReducer = combineReducers({
  // Reducers
  member,
});

const store = createStore(rootReducer);

export default store;
