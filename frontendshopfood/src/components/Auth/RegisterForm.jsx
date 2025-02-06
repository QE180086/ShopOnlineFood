import { Modal } from "bootstrap"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../State/Authentication/Action";

export const RegisterForm = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [initValue, setInitValue] = useState({
        fullName: '',
        email: '',
        password: '',
        role:'ROLE_CUSTOMER'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        dispatch(registerUser({userData: initValue, navigate}))


    }
    console.log('u' + initValue.email)
    console.log('u' + initValue.password)

    const handleSubmitLogin = () => {
        navigate('/account/login')
    }
    return (
        <>
            <div className="text-center fw-bold fs-3">Register </div>
            <div className="container d-block justify-content-center -align-items-center ">
            <div>
                    <i className="bi bi-people"><input placeholder="Fullname..." name="fullName" type="text" className="h-20 w-100 rounded form-control"
                        value={initValue.fullName}
                        onChange={handleChange}></input></i>
                </div>
                <div>
                    <i className="bi bi-person"><input placeholder="Username..." name="email" type="text" className="h-20 w-100 rounded form-control"
                        value={initValue.email}
                        onChange={handleChange}></input></i>
                </div>
                <div>
                    <i className="bi bi-lock"><input placeholder="Password..." name="password" type="password" className="w-100 rounded form-control"
                        value={initValue.password}
                        onChange={handleChange}></input></i>
                </div>

                <button type="submit" onClick={() => { handleSubmit() }} className="btn btn-primary w-100 ">SignUp</button>
                <p>Do you have account? <a onClick={() => { handleSubmitLogin() }} className="color-blue cursor-pointer">SignIn</a></p>


            </div>

        </>
    )
}