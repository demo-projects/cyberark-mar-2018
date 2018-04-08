// store/actions/editor.actions.ts
export const SET_SELECTED_INDEX = '[Editor] set selected index';
export const UPDATE_PROPERTIES = '[Editor] update properties';
export const ADD_ELEMENT = '[Editor] add element';
export const RESET = '[Editor] reset';

export const setSelectedIndex = index => ({
  type: SET_SELECTED_INDEX,
  payload: index
});

export const updateProperties = newProperties => ({
  type: UPDATE_PROPERTIES,
  payload: newProperties
});

export const addElement = tag => ({
  type: ADD_ELEMENT,
  payload: {
    tag,
    text: 'New Element',
    color: '#000000',
    opacity: 1
  }
});

export const reset = () => ({
  type: RESET
});
