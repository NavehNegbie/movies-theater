import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import { rootReducer } from './redux/reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App className="App"/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
