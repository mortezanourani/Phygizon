import axios from "axios";
import { createContext, useContext, useState } from "react";
import { apiHeaders, baseUrl } from "./API";
import { headers } from "./hooks/apiUrls";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("User") || null);
    const [userType, setUserType] = useState(localStorage.getItem("UserType") || null);
    const [token, setToken] = useState(localStorage.getItem("Authorization") || "");

    const loginAction = async (data) => {
        await axios.post(baseUrl + '/user/login/check_password/',
            data)
            .then(response => {
                const data = response.data;
                setUser(data.user_info.first_name + ' ' + data.user_info.last_name);
                setToken(data.token_info.token);
                localStorage.setItem('User', data.user_info.first_name);
                localStorage.setItem("Authorization", "token " + data.token_info.token);
                headers.Authorization = localStorage.getItem("Authorization");
                apiHeaders.Authorization = localStorage.getItem("Authorization");

                axios.get(baseUrl + "/user/profile/info/", { headers })
                    .then(response => {
                        const data = response.data;
                        localStorage.setItem('UserType', data.user_type);
                        setUserType(data.user_type);
                    });
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            })
    };

    const validateToken = async () => {
        axios.get(baseUrl + '/user/profile/info', { headers })
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
        <AuthContext.Provider value={{ token, user, userType, loginAction, validateToken, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
