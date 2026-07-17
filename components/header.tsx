'use client'

import classes from './header.module.css'
import { useUser } from '../providers/UserProvider'
import Link from 'next/link'
import { redirect } from 'next/navigation'


export default function Header() {    
    const { userData: user } = useUser() 


    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul className={classes.ul}>
            {!user && <>
                <div>
                <a
                    onClick={() => redirect('/login')}
                >Login</a>
                </div>
                <div>
                <a
                    onClick={() => redirect('/register')}
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

        </nav>

    </header>
}