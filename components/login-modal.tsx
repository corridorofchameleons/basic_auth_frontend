import classes from './login-modal.module.css'
import { useActionState } from 'react';
import { handleSubmit } from '../actions/auth';

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
    isModalOpen,
    closeModal   
}: ModalProps) {

    const [state, formAction, pending] = useActionState(
        handleSubmit, 
        initialState
    )

    return (
    <dialog open={isModalOpen}>
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

        <button onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </dialog>
  );
}