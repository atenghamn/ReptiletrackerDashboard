import { Paper, Typography } from "@mui/material"
import React, {useState} from "react";
import AuthService from "../services/auth-service";

const Login = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [backdrop, setBackrop] = useState<boolean>(false);

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleCloseBackdrop = () => {
        setBackrop(false);
    }

    const handleOpenBackdrop = () => {
        setBackrop(true);
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleOpenBackdrop();

        AuthService.login(username, password).then( () => {
            window.location.reload();
        })
        handleCloseBackdrop();
    }



    return (
    <Paper>

    </Paper>
    );
}

export default Login;