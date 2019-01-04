import authActionTypes from './authActionTypes';

export const authorizeReddit = () => {
    return dispatch => {
        let url = window.location.href;
        // console.log(url)
        if (url.includes('token')) {
            let state = url.match(/state=(.*?)&/)[1];
            let bearer = url.match(/token=(.*?)&/)[1]
            if (state === process.env.REACT_APP_RANDOM_STRING && bearer !== undefined) {
                console.log(state, bearer)
                sessionStorage.setItem("t", bearer);
                dispatch(tokenSuccess(bearer));
                // return bearer;
            }
        } else {
            dispatch(tokenFailure())
        }
    }
}
export const tokenSuccess = (token) => {
    return {
        type: authActionTypes.TOKEN_SUCCESS,
        data: token
    }
}
export const tokenFailure = () => {
    return {
        type: authActionTypes.TOKEN_FAILURE,
        data: null
    }
}

export const logout = () => {
    return {
        type: authActionTypes.LOGOUT,
        data: sessionStorage.removeItem('t')
    }
}