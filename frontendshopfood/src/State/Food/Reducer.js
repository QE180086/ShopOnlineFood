import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_CATEGORY_RESTAURANT_SUCCESS, GET_INGREDIENT_SUCCESS, GET_RESTAURANT_FAILURE, GET_RESTAURANT_FOOD_SUCCESS, GET_RESTAURANT_REQUEST, GET_RESTAURANT_SUCCESS } from "./ActionType";

const initialState = {
    error: null,
    isloading: false,
    category:[],
    ingredient:[],
    food: null,
    foods: [],
    userFood: [],
    restaurantFood:[]

}

export const foodReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_INGREDIENT_SUCCESS:
            return{
                ...state,
                isloading:false,
                ingredient: action.payload
            }


        case GET_RESTAURANT_FOOD_SUCCESS:
            return{
                ...state,
                isloading:false,
                restaurantFood: action.payload
            }
            
        case GET_CATEGORY_RESTAURANT_SUCCESS:
            return{
                ...state,
                isloading:false,
                category: action.payload
            }

            
       

        default:
            return state
    }

}