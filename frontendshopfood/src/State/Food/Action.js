import axios from "axios";
import { CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_CATEGORY_RESTAURANT_REQUEST, GET_CATEGORY_RESTAURANT_SUCCESS, GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_RESTAURANT_FAILURE, GET_RESTAURANT_FOOD_REQUEST, GET_RESTAURANT_FOOD_SUCCESS, GET_RESTAURANT_REQUEST, GET_RESTAURANT_SUCCESS } from "./ActionType"
import { API_URL } from "../../api/api";


// INGREDIENT

export const getIngredient = (restaurantId) => async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_REQUEST})
    try {
        const { data } = await axios.get(`${API_URL}/ingredient/restaurant/${restaurantId}/category`)
           
        
        console.log("API response: ", data);

        dispatch({ type: GET_INGREDIENT_SUCCESS, payload: data })

    } catch (error) {
        console.log('getRestaurant: ' + error)
    }
}

// Category

export const getCategory = (token,restaurantId) => async (dispatch) => {
    dispatch({ type: GET_CATEGORY_RESTAURANT_REQUEST})
    try {
        const { data } = await axios.get(`${API_URL}/api/getRestaurantCategory/${restaurantId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
           
        
        console.log("API response: ", data);

        dispatch({ type: GET_CATEGORY_RESTAURANT_SUCCESS, payload: data })

    } catch (error) {
        console.log('getRestaurant: ' + error)
    }
}



// FOOD
export const getRestaurantFood = (token, restaurantId, vegetarian, seasonal,nonveg,food_category) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_FOOD_REQUEST})
    try {
        const { data } = await axios.get(`${API_URL}/api/food/getRestaurantFood/${restaurantId}?vegetarian=${vegetarian}&seasonal=${seasonal}&nonveg=${nonveg}&food_category=${food_category}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log("API response: ", data);

        dispatch({ type: GET_RESTAURANT_FOOD_SUCCESS, payload: data })

    } catch (error) {
        console.log('getRestaurant: ' + error)
    }
}



