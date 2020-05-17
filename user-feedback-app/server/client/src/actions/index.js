import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
}
export const handleStripeToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
}

/*export const fetchUser = () => {     //this is a action creator
    return function (dispatch) {
        axios
            .get('/api/current_user')      //we want to dispatch an action after the get call is completed
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};
*/

//action creator without redux thunk
/*fetchUser = () => {
    const request = axios.get('/api/current_user')
    axios returns a promise, so if we Immediately return its response, we don't know if it got Resolved..

    return {
        type: FETCH_USER,
        payload: request
    };
};
*/