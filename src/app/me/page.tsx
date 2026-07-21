import MeData from '../../components/Me'
import { getUser } from '../../../utils/http'
import classes from './page.module.css'
import { cookies } from 'next/headers'

export default async function Me() {
    const cookiesData = (await cookies()).toString()

    // const userData = await getUser(cookiesData)
    // const user = userData.user

    // if (!user) return <h2>No user found</h2>
    
    return <div className={classes.container}>
        <MeData 
        // user={user} 
        cookiesData={cookiesData}
        />
    </div>
}