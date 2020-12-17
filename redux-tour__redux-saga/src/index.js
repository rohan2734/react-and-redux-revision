import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import reducer from "./store/reducer";

import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {watchAgeUp} from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore (reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
