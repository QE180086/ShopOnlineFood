import { useState } from 'react';
import './Navbar.css';
import { LoginForm } from '../Auth/LoginForm';
import { Auth } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../State/Authentication/ActionType';
export const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { auth } = useSelector((store) => store)
    console.log("auth" + auth.user?.fullName)
    const toggleModal = () => {

        navigate('/account/login')
        setIsModalOpen(!isModalOpen)
        console.log('s' + isModalOpen)

    }

    const handleAvatar =()=>{
        if(auth?.user?.role ==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        } else if(auth?.user?.role ==="ROLE_RESTAURANT_OWNER"){
            navigate("/admin")
        } else{
            toggleModal()
        }
    }
    console.log("role: "+ auth?.user?.role)
    return (
        <>
            <div className="Navbar">
                <div className='Navbar-text' onClick={()=>navigate('/')}>
                    Atula Food
                </div>
                <div className="Navbar-icons gap-5 ">
                    <div><i className="bi bi-search"></i> </div>


                    <div onClick={() => handleAvatar()} style={{ cursor: 'pointer' }}>
                        {
                            auth.user?
                                (
                                    <div className='border border-light border-2 rounded-circle fw-bold p-2'>
                                        {auth.user.fullName[0].toUpperCase()}      
                                                                                                                                              
                                    </div>
                                    
                                ) :
                                (<i className="bi bi-person-circle"></i>)

                        }
                    </div>


                    <div onClick={()=>navigate('/cart')} style={{cursor:"pointer"}}><i className="bi bi-cart-fill"></i></div>

                </div>
            </div>
            {
                isModalOpen ? <Auth></Auth> : ''
            }
        </>
    )
}