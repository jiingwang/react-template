import { combineReducers } from 'redux';

function peoples (state = [{name: 'wj', gender: 'male', id: 23}], action) {
    return state;
}

function id(state = 23, action) {
    return state;
}


export default combineReducers({peoples, id});