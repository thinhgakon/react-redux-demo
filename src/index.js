import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = { value: 0, highlight: false };

const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') return { value: state.value + 1, highlight: state.highlight };
  if (action.type === 'DOWN') {
    if (state.value) return { value: state.value - 1, highlight: state.highlight };
  }
  if (action.type === 'CHANGE_COLOR') return { value: state.value, highlight: !state.highlight };
  return state;
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
