import Link from "next/link"
import classes from './header.module.css'

export default function Header() {
    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <Link
                    href='/'
                >Main</Link>
                <Link
                    href='/login'
                >Login</Link>
            </ul>
        </nav>
    </header>
}