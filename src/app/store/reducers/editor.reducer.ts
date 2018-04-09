import { set, update, flow, map, pick } from 'lodash/fp';
import { ElementProperties } from '../../types/element-properties.types';
import {
  SET_SELECTED_INDEX,
  UPDATE_PROPERTIES,
  ADD_ELEMENT,
  RESET,
  SET_ELEMENTS,
  SET_PROJECTS,
  ADD_PROJECT
} from '../actions/editor.actions';

export interface EditorState {
  elements: ElementProperties[];
  selectedIndex: number;
  projectIds: number[];
}

const initialState = {
  elements: [
    { tag: 'h1', text: 'Welcome', opacity: 1 },
    { tag: 'h2', text: 'Cyberark Course 2018', opacity: 1 }
  ],
  selectedIndex: null,
  projectIds: []
};

const concat = item => arr => [...arr, item];

export const editorReducer = (state: EditorState = initialState, action) => {
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

    case SET_ELEMENTS:
      return set('elements', action.payload, state);

    case SET_PROJECTS:
      return set('projectIds', map('id', action.payload), state);

    case ADD_PROJECT:
      return update('projectIds', concat(action.payload.id), state);

    case RESET:
      return {
        ...state,
        ...pick(['selectedIndex', 'elements'], initialState)
      };
  }
  return state;
};
