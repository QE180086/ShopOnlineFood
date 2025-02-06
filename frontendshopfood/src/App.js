import logo from './logo.svg';
import './App.css';
import { LoginForm } from './components/Auth/LoginForm';
import { CustomerRouter } from './Routes/CustomerRouter';
import { Home } from './components/Home/Home';
import { NavBar } from './components/Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Authentication/Action';
import { RestaurantDetail } from './components/Restaurant/RestaurantDetail';
import { Cart } from './components/Cart/Cart';
import { getAllRestaurant } from './State/Restaurant/Action';
import { getAllCart } from './State/Cart/Action';


function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector((store)=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt||jwt))
    dispatch(getAllRestaurant(jwt))
    dispatch(getAllCart(jwt))

  },[auth.jwt||jwt])

  return (
    <div>
   <CustomerRouter></CustomerRouter>
   {/* <NavBar></NavBar> */}
   {/* <RestaurantDetail></RestaurantDetail> */}
{/* <Home></Home> */}
    </div>
  );
}

export default App;
