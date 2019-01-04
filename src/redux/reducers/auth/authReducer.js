import authActionTypes from '../../actions/auth/authActionTypes';

const initialState = {
    token: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authActionTypes.TOKEN_SUCCESS:
        return {
            token: action.data
        }
        case authActionTypes.TOKEN_FAILURE:
        return {
            token: action.data
        }
        case authActionTypes.LOGOUT:
        return{
            token: action.data
        }
        default:
            {
                return state;
            }
    }
}