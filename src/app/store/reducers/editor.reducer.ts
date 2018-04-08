import { set, update, flow } from 'lodash/fp';
import {
  SET_SELECTED_INDEX,
  UPDATE_PROPERTIES,
  ADD_ELEMENT,
  RESET
} from '../actions/editor.actions';

const initialState = {
  elements: [
    { tag: 'h1', text: 'element1', opacity: 1 },
    { tag: 'h2', text: 'element2', opacity: 1 }
  ],
  selectedIndex: null
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_INDEX:
      return set('selectedIndex', action.payload, state);
    case UPDATE_PROPERTIES:
      return update(
        ['elements', state.selectedIndex],
        element => ({ ...element, ...action.payload }),
        state
      );
    case ADD_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.payload],
        selectedIndex: state.elements.length
      };
    case RESET:
      return initialState;
  }
  return state;
};
