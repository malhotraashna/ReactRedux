import React from 'react' ;
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './AppPresenter';
import {reducers} from './reducer';

import { Provider } from 'react-redux';
let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
