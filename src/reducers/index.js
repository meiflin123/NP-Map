import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parkReducer from './parkReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  parks: parkReducer
});