import classes from './reg-modal.module.css'
import { useActionState } from 'react';
import { handleRegSubmit } from '../actions/auth';

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
        {pending ? 'Делаем...' : 'Рег'}
      </button>
    )
}

export default function RegModal({
    isModalOpen,
    closeModal   
}: ModalProps) {

    const [state, formAction, pending] = useActionState(
        handleRegSubmit, 
        initialState
    )

    return (
    <dialog open={isModalOpen}>
      <div>
        <h2 className={classes.heading}>Register</h2>
        
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