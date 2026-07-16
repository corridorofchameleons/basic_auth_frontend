'use client'

import { logOut } from "../utils/http"

export default function MeData({user}) {
    async function onLogout() {
        await logOut()
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