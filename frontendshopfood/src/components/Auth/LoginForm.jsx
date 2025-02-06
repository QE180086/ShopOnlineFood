import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../State/Authentication/Action";

export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {auth} = useSelector((store)=>store)
    console.log("error: " + auth.error)
    const [initValue, setInitValue] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        dispatch(loginUser({userData: initValue, navigate}))
    }
   
    console.log(initValue.email)
    console.log(initValue.password)


    const handleSubmitRegister = () => {
        navigate('/account/register')
    }
    return (
        <>
            <div className="text-center fw-bold fs-3">Login </div>
            <div className="container d-block justify-content-center -align-items-center ">
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
                {auth.error && <div className="text-danger mt-2">{auth.error}</div>} {/* Hiển thị lỗi */}

                <button type="submit" onClick={() => { handleSubmit() }} className="btn btn-primary w-100 ">Login</button>
                <p>Do you have account? <a onClick={() => { handleSubmitRegister() }} className="color-blue cursor-pointer">Register</a></p>

            </div>

        </>
    )
}