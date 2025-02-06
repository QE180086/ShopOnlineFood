import { ADD_CART_SUCCESS, DELETE_CART_SUCCESS, GET_ALL_CART_SUCCESS, GET_CART_SUCCESS, UPDATE_CART_SUCCESS } from "./ActionType"

const initialState = {
    error: null,
    isloading: false,
    userCart:null,
    cart:null,
    carts:[]

}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_CART_SUCCESS:
            return{
                ...state,
                isloading:false,
                carts: action.payload
            }


        case GET_CART_SUCCESS:
            return{
                ...state,
                isloading:false,
                cart: action.payload
            }
            
        case DELETE_CART_SUCCESS:
            return{
                ...state,
                isloading:false,
                carts: action.payload
            }

            case UPDATE_CART_SUCCESS:
            return{
                ...state,
                isloading:false,
                carts: state.carts.map((item)=>item.items.id === action.payload.id? action.payload:item)
            }
            case ADD_CART_SUCCESS:
                return{
                    ...state,
                    isloading:false,
                    carts: state.carts.map((item)=>item.items.foodId === action.payload.items.foodId? (item.items.quantity=item.items.quantity+1) : action.payload)
                }

            
       

        default:
            return state
    }

}