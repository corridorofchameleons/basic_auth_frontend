'use client'

import classes from './page.module.css'
import { useActionState, useEffect, useTransition } from 'react';
import { handleLoginSubmit } from '@/actions/auth';
import { redirect, useRouter } from 'next/navigation';
import { useUser } from '../../../providers/UserProvider';
import { decodeJWT } from '../../../lib/jwt';

const initialState = {
    error: null,
}

interface ModalProps {
    isModalOpen: boolean,
    closeModal: () => void
}

function SubmitButton({pending}: {pending: boolean}) {
    return (
      <button type="submit" disabled={pending}>
        {pending ? 'Входим...' : 'Войти'}
      </button>
    )
}

export default function LoginModal({
    // isModalOpen,
    // closeModal   
}: ModalProps) {
    const {setUserData} = useUser()

    const [state, formAction, pending] = useActionState(
        handleLoginSubmit, 
        initialState
    )

    useEffect(() => {
      if (state?.error === false) {
        const token = state?.data.data.access_token
        const userData = decodeJWT(token)
        setUserData({ ...userData })
        redirect('/')  
      }
    }, [state])


    return (
    <dialog open={true}>
      <div>
        <h2 className={classes.heading}>Login</h2>
        
        <form action={formAction}>
            <div className={classes.form}>
          <label>
            Email:
            <input 
              type="email" 
              name='email'
              required 
              defaultValue={state?.fields?.email || ''} 
            />
          </label>
          
          <label>
            Пароль:
            <input 
              type="password" 
              name='password' 
              required 
              defaultValue={state?.fields?.email || ''} 
            />
          </label>
          </div>
          
        <SubmitButton pending={pending}/>
        {state?.error && <p>{state?.error}</p>}
        </form>

        <button onClick={() => redirect('/')}>
          Закрыть
        </button>
      </div>
    </dialog>
  );
}