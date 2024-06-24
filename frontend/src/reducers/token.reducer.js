export const SET_TOKEN = "SET_TOKEN"; // Ensure this is exported if used elsewhere

const initialState = {
    token: null
};

export default function tokenReducer(state = initialState, action){
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
}
