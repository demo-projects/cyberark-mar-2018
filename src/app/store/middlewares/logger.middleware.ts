export const loggerMiddleware = ({ getState, dispatch }) => next => action => {
  const prevState = getState();
  const result = next(action);
  const nextState = getState();
  console.groupCollapsed(`action ${action.type}`);
  console.log('action', action);
  console.log('prevState', prevState);
  console.log('nestState', nextState);
  console.groupEnd();

  return result;
};
