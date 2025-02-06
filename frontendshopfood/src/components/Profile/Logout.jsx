import { useDispatch, useSelector } from "react-redux"
import { LOGOUT } from "../../State/Authentication/ActionType"
import { useNavigate } from "react-router-dom"

export const LogOut = () => {
    const { auth } = useSelector((store) => store)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handLogout=()=>{
        dispatch({type: LOGOUT})
        navigate("/")
    }

    return (
        <>
            <div className="row container ">
                <div className="col-md-3"></div>
                <div className=" col-md-9 d-flex flex-column justify-content-center align-items-center ">
                    <i className="bi bi-person-circle" style={{ fontSize: "100px" }}></i>
                    <div className="text-center">
                        <p className="fw-bold fs-2">Wellcom to Atula Food</p>
                        {
                            auth.user ? (<p className="text-center fs-5">Email: {auth?.user.email}</p>) : (<p>Hello Customer</p>)
                        }
                            <button type="button" onClick={()=>handLogout()} className="btn btn-primary" style={{backgroundColor:"#ff0066", border:"1px solid #ff0066"}}>LOGOUT</button>
                    </div>
                </div>
            </div >

        </>
    )
}