import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } 
from "./constants";
/**
 * setSearch field function returns an object with the type of action and the payload text
 * @param {*} text the text to return in the object
 */
export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text     
    }
}
/**
 * requestRobotsAction first dispatches the pending state, then fetchs an url and manages the response
 * this is possible due to the redux-thunk library, where requestRobotsAction returns not an object
 * but another function:  (dispatch)
 * @param {*} dispatch the dispatch method to dispatch the different objects
 */
export const requestRobotsAction = (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json();})
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err}));
}