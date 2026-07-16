export function decodeJWT(token: string | undefined) {

    if (!token) return null

    try {
        const payload = token.split('.')[1]
        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
        const jsonStr = Buffer.from(base64, 'base64').toString('utf-8')
        return JSON.parse(jsonStr)
    } catch {
        return null
    }
}