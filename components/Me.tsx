'use client'

import { redirect } from "next/navigation"
import { useUser } from "../providers/UserProvider"
import { deleteUser, logOut } from "../utils/http"

export default function MeData({cookiesData}) {
    const {userData: user, setUserData, userLoading} = useUser()

    async function onLogout() {
        await logOut()
        setUserData(null)
        redirect('/')
    }

    async function onDelete() {
        console.log(user)
        if (user) {
            await deleteUser(user.id, cookiesData)
        }

        setUserData(null)
        redirect('/')
    }

    if (!user) {
        return <div>Not found</div>
    }

    if (userLoading && !user) {
        return <div>Loading...</div>
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