import axios from 'axios';


export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const SET_PRENOM = "SET_PRENOM";

export const getPseudo = ({ newPseudo, token }, onError) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        // Formatting the payload as required by the API
        const payload = {
            userName: newPseudo  // Setting the userName key to the value of newPseudo
        };

        axios.put("http://localhost:3001/api/v1/user/profile", payload, config)
            .then(res => {
                dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
                dispatch({ type: SET_PRENOM, payload: res.data.body});
            })
            .catch(error => {
                dispatch({ type: FETCH_POST_FAILURE, payload: error });
                if (onError) {
                    onError(error);  // Pass error back for local handling (like showing a message)
                }
            });
    }
}
