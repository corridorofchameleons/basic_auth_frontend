'use client'

import classes from './header.module.css'
import { useState } from "react"
import LoginModal from "./login-modal"
import RegModal from "./reg-modal"
import { useUser } from '../providers/UserProvider'
import Link from 'next/link'


// function getCookie() {
//     fetch('http://localhost:8000/debug_cookie',
//         {
//             method: 'POST',
//             credentials: 'include'
//         }
//     )
//     .then(resp => {
//         console.log('ok')}
//     )
// }

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
    const [isRegModalOpen, setIsRegModalOpen] = useState<boolean>(false)

    const user = useUser()

    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul className={classes.ul}>
            {!user && <>
                <div>
                <a
                    onClick={() => setIsLoginModalOpen(true)}
                >Login</a>
                </div>
                <div>
                <a
                    onClick={() => setIsRegModalOpen(true)}
                >Register</a>
                </div>
            </>}

            {user && <>
                <div>
                <Link
                href="/me"
                >{user.email}</Link>
                </div>
            </>}

            </ul>
            {isLoginModalOpen && <LoginModal 
            isModalOpen={isLoginModalOpen}
            closeModal={() => {
                setIsLoginModalOpen(false)
            }}
            />}

            {isRegModalOpen && <RegModal 
                isModalOpen={isRegModalOpen}
                closeModal={() => setIsRegModalOpen(false)}
            />}
        </nav>

    </header>
}