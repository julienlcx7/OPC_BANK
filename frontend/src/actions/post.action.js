import axios from 'axios';

export const GET_POSTS = "GET_POSTS";
export const SET_TOKEN = "SET_TOKEN"; // Action type for setting the token
export const SET_ERORR = "SET_ERORR";

export const getPosts = (credentials, onSuccess) => {
    return (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        axios.post("http://localhost:3001/api/v1/user/login", credentials, config)
            .then(res => {
                dispatch({ type: "FETCH_POST_SUCCESS", payload: res.data });
                console.log(res);

                // Dispatch action to set token
                dispatch({ type: SET_TOKEN, payload: res.data.body.token });

                if (onSuccess) {
                    onSuccess();  // Execute the callback if the login is successful
                }
            })
            .catch(error => {
                dispatch({ type: "FETCH_POST_FAILURE", payload: error });
                dispatch({ type: SET_ERORR, payload: error });
                console.log(error);
            });
    }
}
