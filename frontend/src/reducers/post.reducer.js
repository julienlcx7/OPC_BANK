export const SET_ERORR = "SET_ERORR"; // Ensure this is exported if used elsewhere

const initialState = {
    error: null
};

export default function postReducer(state = initialState, action){
    switch (action.type) {
        case SET_ERORR:
            return { ...state, error: action.payload.message };
        default:
            return state;
    }
}
