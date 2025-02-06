import axios from "axios";
import { CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_FAILURE, GET_RESTAURANT_REQUEST, GET_RESTAURANT_SUCCESS } from "./ActionType"
import { API_URL } from "../../api/api";

export const getAllRestaurant = (token) => async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANT_REQUEST })
    try {
        const { data } = await axios.get(`${API_URL}/api/restaurants/getRestaurant`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log("API response: ", data);

        dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data })

    } catch (error) {
        console.log('getRestaurant: ' + error)
    }
}

export const getRestaurant = (token, restaurantId) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_REQUEST })
    try {
        const { data } = await axios.get(`${API_URL}/api/restaurants/${restaurantId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log("API response: ", data);

        dispatch({ type: GET_RESTAURANT_SUCCESS, payload: data })

    } catch (error) {
        console.log('getRestaurant: ' + error)
    }
}


export const createRestaurant = (token, reqData) => async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/api/admin/restaurants/createRestaurant`,
            reqData
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })

    } catch (error) {
        console.log('getRestaurant: ' + error)
    }
}


