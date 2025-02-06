import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reuducer";
import {thunk} from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { foodReducer } from "./Food/Reducer";
import { cartReducer } from "./Cart/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    food: foodReducer,
    cart: cartReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))