import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = async (username: string, password: string ) => {
    const response = await axios
        .post(API_URL + "register", {
            'email': username,
            'password': password
        });
    return response.data;
    
}

const login = async (username: string, password: string) => {
    const response = await axios
        .post(API_URL + "login", {
            'email': username,
            'password': password
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
    }
    console.log(response.data.accessToken);
    return response.data;
}

const logout = () => {
    localStorage.removeItem("user");
}

const AuthService = {
    register,
    login,
    logout
}

export default AuthService;