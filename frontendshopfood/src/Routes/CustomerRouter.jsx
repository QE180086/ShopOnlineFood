import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/Navbar/Navbar"
import { RegisterForm } from "../components/Auth/RegisterForm"
import { Home } from "../components/Home/Home"
import { LoginForm } from "../components/Auth/LoginForm"
import { Auth } from "../components/Auth/Auth"
import { MyProfile } from "../components/Profile/Profile"
import { Order } from "../components/Profile/Order"
import { RestaurantDetail } from "../components/Restaurant/RestaurantDetail"
import { Cart } from "../components/Cart/Cart"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../State/Authentication/Action"
import { getAllRestaurant } from "../State/Restaurant/Action"
import { useEffect } from "react"

export const CustomerRouter = () => {

    return (
        <div>
            <NavBar></NavBar>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/account/register" element={<Home />}></Route>
                    <Route path="/account/login" element={<Home />}></Route>

                    <Route path="/restaurant/:restaurantId" element={<RestaurantDetail></RestaurantDetail>}></Route>

                    <Route path="/cart" element={<Cart></Cart>}></Route>



                    <Route path="/my-profile" element={<MyProfile/>}></Route>
                    <Route path="/my-profile/orders" element={<Order/>}></Route>

                </Routes>

                <Auth></Auth>
        </div>
    )
}