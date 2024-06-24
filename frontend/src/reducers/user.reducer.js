export const SET_PRENOM = "SET_PRENOM";

const initialState = {
    prenom: null,
    nom: null,
    pseudo: null
};

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case SET_PRENOM:
            return {
                ...state, 
                prenom: action.payload.firstName,
                nom: action.payload.lastName,
                pseudo: action.payload.userName
            };
        default:
            return state;
    }
}