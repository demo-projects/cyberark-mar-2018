import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth.reducer';
import { editorReducer } from './reducers/editor.reducer';
import {
  setSelectedIndex,
  updateProperties,
  addElement
} from './actions/editor.actions';

export const reducer = combineReducers({
  editor: editorReducer,
  auth: authReducer
});
