import React from 'react';
import ReactDOM from 'react-dom';

import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import freezeState from 'redux-freeze-state';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mapStateToProps = (state) => ({
  app: state.app
});

const logger        = createLogger();
const middlewares   = [ thunk, logger ];
const store         = createStore(freezeState(rootReducer), applyMiddleware(...middlewares));
const appDOMElement = document.getElementById('root');
const BaseApp           = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <BaseApp />
  </Provider>,
  appDOMElement
);

registerServiceWorker();
