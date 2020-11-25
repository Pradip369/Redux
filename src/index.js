import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer';
import thunk from 'redux-thunk'


import name_reducer from './reducers/name_reducer';
import wish_reducer from './reducers/wish_reducer';

const masterReduser = combineReducers({
  name: name_reducer,
  wish: wish_reducer
})

// const store = createStore(reducer, applyMiddleware(thunk))

const store = createStore(masterReduser, { name: "Pradip" }, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}> <App /> </Provider>
  , document.getElementById('root')
);
reportWebVitals();
