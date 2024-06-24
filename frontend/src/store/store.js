import { configureStore } from '@reduxjs/toolkit';
import rootReducer  from '../reducers/index';
import { getPosts } from '../actions/post.action';


export const store = configureStore({
    reducer: rootReducer,
    devTools: true
    
});
