'use client';

import { useState, SubmitEvent, Dispatch, SetStateAction } from 'react';
import classes from './login-modal.module.css'

interface ModalProps {
    isModalOpen: boolean,
    closeModal: () => void
}

export default function LoginModal({
    isModalOpen,
    closeModal   
}: ModalProps) {
    console.log(isModalOpen)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    
    console.log('Попытка входа:', email); 
    // Здесь позже будет логика отправки запроса к /auth/login
  };

//   if (!isModalOpen) return null

  return (
    <dialog open={isModalOpen}>
      <div>
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              name='email'
              required 
            />
          </label>
          
          <label>
            Пароль:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              name='password' 
              required 
            />
          </label>
          
          <button type="submit">Войти</button>
        </form>

        <button onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </dialog>
  );
}