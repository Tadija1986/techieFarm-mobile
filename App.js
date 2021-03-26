import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './src/common/reducers/root';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Navigator from './src/routes/rootNavigation';

const store = formStore();

function formStore() {
  return createStore(reducer, applyMiddleware(thunk, logger));
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
