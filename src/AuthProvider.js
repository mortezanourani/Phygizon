import axios from "axios";
import { createContext, useContext, useState } from "react";
import { baseUrl } from "./API";
import { apiHeaders } from "./hooks/apiUrls";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("Authorization") || "");

    const loginAction = async (data) => {
        await axios.post(baseUrl + '/user/login/check_password/',
            data)
            .then(response => {
                setUser(response.data.user_info.first_name + ' ' + response.data.user_info.last_name);
                setToken(response.data.token_info.token);
                localStorage.setItem('User', response.data.user_info.first_name + ' ' + response.data.user_info.last_name);
                localStorage.setItem("Authorization", "token " + response.data.token_info.token);
                apiHeaders.Authorization = localStorage.getItem("Authorization");
            })
            .catch((error) => {
                alert(error.message);
            })
    };

    const validateToken = async () => {
        const updatedHeader = {
            "accept": "application/json",
            "Authorization": localStorage.getItem("Authorization"),
            "Content-Type": "application/json"
        };

        axios.get(baseUrl + '/user/profile/info', { headers: updatedHeader })
            .catch((error) => {
                if (error.response.status === 401) {
                    clearAuthorization();
                }
            });
    }

    const logOut = () => {
        clearAuthorization();
        document.location.replace('/');
    };

    const clearAuthorization = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("User");
        localStorage.removeItem("Authorization");
    }

    return (
        <AuthContext.Provider value={{ token, user, loginAction, validateToken, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
