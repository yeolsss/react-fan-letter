import { combineReducers, createStore } from 'redux';
import member from './module/member';
import letter from './module/letter';

const rootReducer = combineReducers({
  // Reducers
  member,
  letter,
});

const store = createStore(rootReducer);

export default store;
