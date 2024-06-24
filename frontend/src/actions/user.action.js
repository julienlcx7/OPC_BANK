import axios from 'axios';

export const GET_USER = "GET_USER";
export const SET_PRENOM = "SET_PRENOM";

// Updated function to accept token as a parameter
export const getuser = (token) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`  
            }
        };

        axios.post("http://localhost:3001/api/v1/user/profile", {}, config)
            .then(res => {
                dispatch({ type: "FETCH_POST_SUCCESS", payload: res.data });
                console.log(res);
                dispatch({ type: SET_PRENOM, payload: res.data.body});
            })
            .catch(error => {
                dispatch({ type: "FETCH_POST_FAILURE", payload: error });
                console.log(error);
            });
    }
}
