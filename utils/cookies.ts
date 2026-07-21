'use server'

import { cookies } from "next/headers"
import { decodeJWT } from "../lib/jwt"

export async function getUserData() {

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('access_token')?.value
    
    if (!accessToken) {
        return null
    }

    const userData = decodeJWT(accessToken)
    return userData  
}