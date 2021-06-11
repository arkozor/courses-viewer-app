export type CommentType = {
    id: number
    user_id: number
    user: {
        avatar: string
        firstname: string
        id: number
        name: string
        nickname: string
    }
    content: string
    replies?: {
        user: any
        content: string
    }[]
}
