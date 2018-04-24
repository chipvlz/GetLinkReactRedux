import { combineReducers } from 'redux';
import activePage from './activePage';
import inputUrl from './inputUrl';
import lastGetStatus from './lastGetStatus';

export default combineReducers({
  activePage,
  inputUrl,
  lastGetStatus,
});
