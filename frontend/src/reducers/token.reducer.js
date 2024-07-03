export const SET_TOKEN = "SET_TOKEN"; // Ensure this is exported if used elsewhere
export const SET_ERROR = "SET_ERROR"; 
const initialState = {
    token: null,
    error: null,
};

export default function tokenReducer(state = initialState, action){
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload,error: null };
        case SET_ERROR:
            return {...state,error: action.payload,};
        default:
            return state;
    }
}
