import { handleActions } from 'redux-actions';
import { actionTypes }  from './actions';

const initialState = {
    todoList: []
};

export default handleActions({
    [actionTypes.ADD_TODO](state, action) {
        return {...todoList, todoList: state.todoList.concat(action.payload)};
    },
    [actionTypes.DELETE_TODO](state, action) {
        const filteredList = state.todoList.filter(todo => {
            return todo.id !== action.payload.id;
        });
        return {...todolis, todoList: filteredList};
    },
    [actionTypes.FINISH_TODO](state, todo) {
        const filteredList = state.todoList.map(todo => {
             return todo.id === action.payload.id ? {...todo, isDeleted: true} : todo;
        });
        return {...todolis, todoList: filteredList};
    }
}, initialState);