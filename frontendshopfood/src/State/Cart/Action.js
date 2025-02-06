import axios from "axios";
import { ADD_CART_REQUEST, ADD_CART_SUCCESS, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_CART_REQUEST, GET_ALL_CART_REQUEST, GET_ALL_CART_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_CATEGORY_RESTAURANT_REQUEST, GET_CATEGORY_RESTAURANT_SUCCESS, GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_RESTAURANT_FAILURE, GET_RESTAURANT_FOOD_REQUEST, GET_RESTAURANT_FOOD_SUCCESS, GET_RESTAURANT_REQUEST, GET_RESTAURANT_SUCCESS, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./ActionType"
import { API_URL } from "../../api/api";
import { ADD_TO_FAVOURITE_REQUEST } from "../Authentication/ActionType";


// Get All Cart

export const getAllCart = (token) => async (dispatch) => {
    dispatch({ type: GET_ALL_CART_REQUEST})
    try {
        const { data } = await axios.get(`${API_URL}/api/cart`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
           
        
        console.log("API response: ", data);

        dispatch({ type: GET_ALL_CART_SUCCESS, payload: data })

    } catch (error) {
        console.log('get Cart: ' + error)
    }
}

// Add Cart

export const addToCart = (req,token) => async (dispatch) => {
    dispatch({ type: ADD_CART_REQUEST})
    try {
        const { data } = await axios.post(`${API_URL}/api/cart/add`,
            req,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
           
        
        console.log("API response: ", data);

        dispatch({ type: ADD_CART_SUCCESS, payload: data })

    } catch (error) {
        console.log('get Cart: ' + error)
    }
}


// Update Cart

export const updateCart = (token,req) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST})
    try {
        const { data } = await axios.put(`${API_URL}/api/cart/updateItem`,
            req,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
           
        
        console.log("API response: ", data);

        dispatch({ type: UPDATE_CART_SUCCESS, payload: data })

    } catch (error) {
        console.log('get Cart: ' + error)
    }
}

// Delete Cart

export const deleteCart = (token) => async (dispatch) => {
    dispatch({ type: DELETE_CART_REQUEST})
    try {
        const { data } = await axios.delete(`${API_URL}/api/cart/clear`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
           
        
        console.log("API response: ", data);

        dispatch({ type: DELETE_CART_REQUEST, payload: data })

    } catch (error) {
        console.log('delete Cart: ' + error)
    }
}





