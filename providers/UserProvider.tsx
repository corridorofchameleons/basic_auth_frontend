'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { refreshToken } from '../utils/http';
import { decodeJWT } from '../lib/jwt';

const UserContext = createContext(null);

export function UserProvider({ 
    children, 
}) {

    const [userData, setUserData] = useState(null)
    const [userLoading, setUserLoading] = useState(true)

    async function getUserData() {
        const resp = await refreshToken()
            if (resp) {
                const token = resp.access_token
                const user = decodeJWT(token)
                setUserData(
                    {
                        id: user.sub,
                        email: user.email,
                        role: user.role
                    }
                )}
            else {
                setUserData(null)
            }
            setUserLoading(false)
        } 

    useEffect(() => {
        // setUserLoading(true)
        getUserData()

        const tmr = setInterval(
            getUserData
            , 4 * 60 * 1000
        )
    
        return () => clearInterval(tmr)
    }, [])

    return (
        <UserContext.Provider value={{
                userData, 
                setUserData,
                userLoading
            }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);