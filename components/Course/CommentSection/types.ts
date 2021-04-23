export type CommentType = {
    author: string
    body: string
    answers?: {
        author: string
        body: string
    }[]
}
