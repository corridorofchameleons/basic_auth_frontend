'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ user, children }) {
    const [userData, setUserData] = useState(user)

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);