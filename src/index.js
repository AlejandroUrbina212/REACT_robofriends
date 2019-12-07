import React from 'react';
import ReactDOM from 'react-dom';
/* Provider allows us to englobe App Container and pass down props in a redux model */
import { Provider } from 'react-redux';
/* createStore allows us to create a store with a given reducer and a middleware*/
import { createStore, applyMiddleware, combineReducers } from 'redux';
/* createLogger gives us the hability to control the redux actions in the console */
import { createLogger } from 'redux-logger';
// thunkMiddleware allows us to make redux Async actions and manage them
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';


const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
             

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
