import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/auth.reducer';
import { editorReducer } from './reducers/editor.reducer';
import {
  setSelectedIndex,
  updateProperties,
  addElement
} from './actions/editor.actions';

const reducer = combineReducers({
  editor: editorReducer,
  auth: authReducer
});

const store = createStore(
  reducer,
  undefined,
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION__']()
);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(setSelectedIndex(1));
store.dispatch(updateProperties({ text: 'new element' }));
store.dispatch(addElement('h3'));
