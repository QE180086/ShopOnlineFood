import { type } from "@testing-library/user-event/dist/type"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios"
import { API_URL } from "../../api/api"
import { useNavigate } from "react-router-dom"


export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`,reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })

    } catch (error) {
        console.log('Register: ' + error)
    }
}
export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`,reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })
   

    } catch (error) {
        console.log('Register: ' + error)
        dispatch({type:LOGIN_FAILURE, payload: error.response.data.message})

    }
}
export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await axios.get(`${API_URL}/api/users/profile`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })

        dispatch({ type: GET_USER_SUCCESS, payload: data })

    } catch (error) {
        console.log('getUser: ' + error)
    }
}
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    try {
        localStorage.clear()
        dispatch({ type: LOGOUT})
        console.log("logout suscess")

    } catch (error) {
        console.log('Logout: ' + error)
    }
}