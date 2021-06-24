export type User = {
    id: number
    username: string
    firstname: string
    lastname: string
    token: string
    avatarSrc?: string
    isAdmin?: boolean
} | null
