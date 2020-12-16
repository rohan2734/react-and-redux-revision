import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {createStore,applyMiddleware } from "redux";
import reducer from "./store/reducer";


const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in the middleware ${JSON.stringify(result)}`);
      return result;
    }
  }

}
// const store = createStore (reducer);
const store = createStore (reducer,applyMiddleware(logAction));

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
