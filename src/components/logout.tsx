
import { Button } from "@mui/material";
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";


const Logout = () => {

    const navigate = useNavigate();
    
    const handleLogOut = () => {
        AuthService.logout();
        navigate("/login");
    } 
    
    return (
        <Button onClick={() =>  handleLogOut()} > Log Out </Button>
    );
}

export default Logout;