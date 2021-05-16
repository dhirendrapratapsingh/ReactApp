import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import {Provider} from 'react-redux'
//like HoC provide the application with store by wrapping around App a glue between react app & reuxx store

import rootReducer from "./reducers/rootReducer"; 
//only this reducer interacts with store

/*import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));
Redux Thunk is a middleware that lets you call action creators that return a function instead of an 
action object. That function receives the store’s dispatch method, which is then used to 'dispatch' regular 
synchronous actions inside the body of the function once the asynchronous operations have completed.

The most common use-case for Redux Thunk is for communicating asynchronously with an external API to retrieve or 
save data. Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API.
*/

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider> , document.getElementById('root'));


serviceWorker.unregister();
