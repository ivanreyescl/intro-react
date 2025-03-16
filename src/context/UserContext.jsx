import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);

    
    const logout = (email, password) => {
        setToken(false);
        alert('Se ha cerrado sesión')
    }

    const setUserState = {
        token,
        setToken: (value) => setToken(value),
        logout
    }
    return (
        
        <UserContext.Provider value={setUserState}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider
