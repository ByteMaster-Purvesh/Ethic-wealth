// it's a context layer of frontend part where i am going to store user data 

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken, setLoading, setError, setSuccess, showLoginPopup, setShowLoginPopup, loading, error, success }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};