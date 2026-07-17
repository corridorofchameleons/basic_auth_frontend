// import { cookies } from "next/headers"

interface credentialsData {
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
}

export async function logIn(data: credentialsData) {
    try {
        const response = await fetch('http://localhost:8000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        if (!response.ok) {   
            return {
                status: 'error',
            }
        } else {
            return {
                status: 'ok',
                data: await response.json()
            }
        }}
        catch {
            return {
                status: 'error'
            }
        }
}


export async function logOut() {
    try {
        const response = await fetch('http://localhost:8000/auth/logout',
            {
                method: 'POST',
                credentials: 'include'
            }
        )
        if (!response.ok) {   
            return {
                status: 'error',
            }
        } else {
            return {
                status: 'ok'
            }
        }}
        catch {
            return {
                status: 'error'
            }
        }
}


export async function registerUser(data: credentialsData) {
    try {
        const response = await fetch('http://localhost:8000/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        if (!response.ok) {   
            return {
                status: 'error',
            }
        } else {
            return {
                status: 'ok'
            }
        }}
        catch {
            return {
                status: 'error'
            }
        }
}


export async function getUser(cookie: string) {
    try {
        const response = await fetch('http://localhost:8000/users/me',
            {
                method: 'GET',
                headers: { Cookie: cookie },
                credentials: 'include'
            }
        )
        if (!response.ok) {   
            return {
                status: 'error',
                user: null
            }
        } else {
            const user = await response.json()
            return {
                status: 'ok',
                user: user
            }
        }}
        catch {
            return {
                status: 'error',
                user: null
            }
        }
}
