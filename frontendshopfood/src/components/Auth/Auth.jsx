import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const Auth = ({ is }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>

            <Modal open={
                location.pathname === '/account/login'
                || location.pathname === '/account/register'
            } onClose={() => navigate('/')}>

                <Box sx={style}>
                    {
                        location.pathname === '/account/login' ? <LoginForm /> : <RegisterForm></RegisterForm>
                    }
                </Box>
            </Modal>
        </>
    )

}