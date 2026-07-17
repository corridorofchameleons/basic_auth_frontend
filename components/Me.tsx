'use client'

import { redirect } from "next/navigation"
import { useUser } from "../providers/UserProvider"
import { logOut } from "../utils/http"

export default function MeData({user}) {
    const {setUserData} = useUser()

    async function onLogout() {
        await logOut()
        setUserData(null)
        redirect('/')
    }

    async function onDelete() {
        console.log('deleting')
    }

    return <>
        <h2>{user.email}</h2>
        <button
        onClick={onLogout}
        >Logout</button>
        <button
        onClick={onDelete}
        >Delete</button>
    </>
}