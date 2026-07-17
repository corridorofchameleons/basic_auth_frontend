import { redirect } from "next/navigation"
import { logIn, registerUser } from "../../utils/http"


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

    return {
        error: false,
        data: resp
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
    
    redirect('/')
}
