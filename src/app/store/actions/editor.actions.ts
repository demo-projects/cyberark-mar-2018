// store/actions/editor.actions.ts
import { apiAction } from './api.actions';
import { navigate } from './router.actions';

export const SET_SELECTED_INDEX = '[Editor] set selected index';
export const UPDATE_PROPERTIES = '[Editor] update properties';
export const SET_ELEMENTS = '[Editor] set elements';
export const ADD_ELEMENT = '[Editor] add element';
export const RESET = '[Editor] reset';
export const ADD_PROJECT = '[Editor] add project';
export const SET_PROJECTS = '[Editor] set project IDs';
export const API = '[Api] request';

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

export const setElements = elements => ({
  type: SET_ELEMENTS,
  payload: elements
});

export const setProjects = projects => ({
  type: SET_PROJECTS,
  payload: projects
});
export const addProject = project => ({
  type: ADD_PROJECT,
  payload: project
});

// API Actions
export const updateProject = (id, elements) =>
  apiAction({
    url: `http://localhost:3000/projects/${id}`,
    method: 'put',
    data: {
      elements
    }
  });

export const createProject = elements =>
  apiAction({
    url: `http://localhost:3000/projects`,
    method: 'post',
    data: {
      elements
    },
    onSuccess: (dispatch, project) => {
      dispatch(navigate(['/editor', project.id]));
      dispatch(addProject(project));
    }
  });

export const loadProject = id =>
  apiAction({
    url: `http://localhost:3000/projects/${id}`,
    method: 'get',
    onSuccess: (dispatch, project) => {
      dispatch(setElements(project.elements));
    }
  });

export const fetchProjects = () =>
  apiAction({
    url: `http://localhost:3000/projects`,
    method: 'get',
    onSuccess: (dispatch, projects) => {
      dispatch(setProjects(projects));
    }
  });
