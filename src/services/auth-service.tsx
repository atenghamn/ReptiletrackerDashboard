import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const login = (username: string, password: string) => {
    return axios
    .post(API_URL + "login", {
        'username': username,
        'password': password
    })
    .then(response => {
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data.access_token));
        }

        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

const AuthService = {
    login,
    logout
}

export default AuthService;