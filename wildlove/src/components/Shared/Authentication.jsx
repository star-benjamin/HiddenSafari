import { createContext, useState, useContext, useEffect } from "react";


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

   
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setIsAuthenticated(true);
            setUser(savedUser);
        }
    }, []);

  
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find((user) => user.email === email && user.password === password);

        if (foundUser) {
            setUser(foundUser);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(foundUser));  
            return true; 
        }

        return false; 
    };

   
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user"); 
    };

  
    const register = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => user.email === email);

        if (existingUser) {
            return false; 
        }

        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users)); 
        return true;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
