import React from 'react';
import ReactDOM from 'react-dom';
/* Provider allows us to englobe App Container and pass down props in a redux model */
import { Provider } from 'react-redux';

/* createStore allows us to create a store with a given reducer and a middleware*/
/* combineReducers is used when an application has multiple reducers */
import { createStore, applyMiddleware, combineReducers } from 'redux';

/* createLogger allows us to control the redux actions in the console */
import { createLogger } from 'redux-logger';

// thunkMiddleware allows us to control  redux Async actions and manage them
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

/* intance of the logger */
const logger = createLogger();
// in order to use multiple reducers we have to create a rootReducer by calling combineReducers function
const rootReducer = combineReducers({ searchRobots, requestRobots });
// The store A.K.A. the state of the app is declared with the root reducer, and as
// an optional second parameter we can pass a middleware, to keep track of the actions
const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware,logger));

/* wrapping the App within the Provider component passes down the store in all the other components contained in the App Component */
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
             

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
