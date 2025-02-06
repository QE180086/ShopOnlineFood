import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_FAILURE, GET_RESTAURANT_REQUEST, GET_RESTAURANT_SUCCESS } from "./ActionType";

const initialState = {
    error: null,
    isloading: false,
    restaurant: null,
    restaurants: [],
    userRestaurant: [],

}

export const restaurantReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_RESTAURANT_FAILURE:
        case GET_ALL_RESTAURANT_SUCCESS:
            return {
                ...state,
                isloading: false,
                restaurants: action.payload

            }
        case GET_ALL_RESTAURANT_REQUEST:

        case GET_RESTAURANT_REQUEST:
        case GET_RESTAURANT_SUCCESS:
            return {
                ...state,
                isloading: false,
                restaurant: action.payload

            }
        case GET_RESTAURANT_FAILURE:

        case CREATE_RESTAURANT_SUCCESS:
        case CREATE_RESTAURANT_REQUEST:
        case CREATE_RESTAURANT_FAILURE:

        default:
            return state
    }

}