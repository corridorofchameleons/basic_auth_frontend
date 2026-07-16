'use client'

import Link from "next/link"
import classes from './header.module.css'
import { useState } from "react"
import LoginModal from "./login-modal"
import RegModal from "./reg-modal"

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

    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                {/* <div>
                <Link
                    href='/'
                >Main</Link>
                </div> */}
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

            </ul>
            {isLoginModalOpen && <LoginModal 
            isModalOpen={isLoginModalOpen}
            closeModal={() => setIsLoginModalOpen(false)}
            />}

            {isRegModalOpen && <RegModal 
                isModalOpen={isRegModalOpen}
                closeModal={() => setIsRegModalOpen(false)}
            />}
        </nav>

    </header>
}