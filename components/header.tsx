'use client'

import Link from "next/link"
import classes from './header.module.css'
import { useState } from "react"
import LoginModal from "./login-modal"

function getCookie() {
    fetch('http://localhost:8000/debug_cookie',
        {
            method: 'POST',
            credentials: 'include'
        }
    )
    .then(resp => {
        console.log('ok')}
    )
}

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
                    onClick={() => setIsModalOpen(true)}
                >Login</a>
                </div>

            </ul>
            {isModalOpen && <LoginModal 
            isModalOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
            />}
        </nav>

    </header>
}