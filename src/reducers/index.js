import { combineReducers } from 'redux';
import activePage from './activePage';
import inputUrl from './inputUrl';

export default combineReducers({
  activePage,
  inputUrl,
});
