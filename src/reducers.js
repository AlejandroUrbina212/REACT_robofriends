import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } 
from "./constants";

/* declaration of the initialStateSeatch state object */
const initialStateSearch = {
    searchField: ''
}

/**
 * searchRobots updates the initialStateSearch according to the result of the setSearchField action in actions.js
 * a function provided in the action parameter
 * @param {*} state the initial state declared on top
 * @param {*} action the action to reduce
 */
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

/* declaration of the initialStateRobots state object */
const initialStateRobots = {
    isPending : false,
    robots : [],
    error : ''
}

/**
 * request robots updates the initialStateRobots object according to the requestRobotAction action in actions.js
 * @param {*} state the initialStateRobots
 * @param {*} action the action to reduce
 */
export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload , isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}