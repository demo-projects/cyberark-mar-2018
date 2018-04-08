import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
  }
  return state;
};

const store = createStore(reducer, 1);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
const increment = (value = 1) => ({ type: 'INCREMENT', payload: value });
const decrement = (value = 1) => ({ type: 'DECREMENT', payload: value });
store.dispatch(increment(10));
store.dispatch(decrement());
