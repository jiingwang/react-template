import thunkMiddleware from 'redux-thunk';

import apiMiddleware from './apiMiddleware';

export const apiMiddleware = apiMiddleware;
export const thunkMiddleware = thunkMiddleware;


export default {
    apiMiddleware,
    thunkMiddleware
}