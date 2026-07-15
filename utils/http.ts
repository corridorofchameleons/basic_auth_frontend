interface loginData {
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
}

export async function logIn(data: loginData) {
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
                status: 'ok'
            }
        }}
        catch {
            return {
                status: 'error'
            }
        }
}