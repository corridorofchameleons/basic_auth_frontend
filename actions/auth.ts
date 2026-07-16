import { logIn, registerUser } from "../utils/http"

// interface loginData {
//     email: FormDataEntryValue | null,
//     password: FormDataEntryValue | null
// }

// export async function logIn(data: loginData) {
//     try {
//         const response = await fetch('http://localhost:8000/auth/login',
//             {
//                 method: 'POST',
//                 body: JSON.stringify(data),
//                 headers: {
//                 'Content-Type': 'application/json'
//                 },
//                 credentials: 'include'
//             }
//         )
//         if (!response.ok) {   
//             return {
//                 status: 'error',
//             }
//         } else {
//             return {
//                 status: 'ok'
//             }
//         }}
//         catch {
//             return {
//                 status: 'error'
//             }
//         }
// }

export async function handleLoginSubmit(prevState: object, formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')
    
    const data = {email, password}

    const resp = await logIn(data)

    if (resp?.status !== 'ok') {   
        return {
            error: 'wrong data',
            fields: {email, password}
        }
    }       
}


export async function handleRegSubmit(prevState: object, formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')
    
    const data = {email, password}

    const resp = await registerUser(data)

    if (resp?.status !== 'ok') {   
        return {
            error: 'wrong data',
            fields: {email, password}
        }
    }       
}

    // try {
    //     const response = await fetch('http://localhost:8000/auth/login',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             headers: {
    //             'Content-Type': 'application/json'
    //             },
    //             credentials: 'include'
    //         }
    //     )
    //     if (!response.ok) {   
    //         return {
    //             status: 'error',
    //         }
    //     } else {
    //         return {
    //             status: 'ok'
    //         }
    //     }}
    //     catch {
    //         return {
    //             status: 'error'
    //         }
    //     }
