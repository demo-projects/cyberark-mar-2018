import { combineReducers } from 'redux';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { editorReducer, EditorState } from './reducers/editor.reducer';
import {
  setSelectedIndex,
  updateProperties,
  addElement
} from './actions/editor.actions';

export interface AppState {
  editor: EditorState;
  auth: AuthState;
}

export const reducer = combineReducers({
  editor: editorReducer,
  auth: authReducer
});
