import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";
import tokenReducer from "./token.reducer";

export default combineReducers({
    userReducer,
    postReducer,
    tokenReducer,
});