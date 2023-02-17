import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormReducer from './Redux/FormReducer';
import LoginReducer from './Redux/LoginReducer';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'


const allReducer = combineReducers({
      form:FormReducer,
      login:LoginReducer
})
const store =createStore(allReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

