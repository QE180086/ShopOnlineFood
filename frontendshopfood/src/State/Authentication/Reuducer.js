import { ADD_TO_FAVOURITE_REQUEST, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVOURITE_REQUEST:
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jwt: action.payload,
                success: "Login Success"
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            }
        case LOGOUT:
            return {
                initialState
            }


        default:
            return state;
    }
}