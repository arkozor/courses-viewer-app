export type PostSubChapterArgs = {
    title: string
    number: number
    description: string
    video_location: string
    resources: PostRessourceArgs[]
}

export type PostRessourceArgs = {
    title: string
    resource_location: string
}

export type PostChapterArgs = {
    title: string
    number: number
    description: string
    subchapters: PostSubChapterArgs[]
}

export type PostCourseArgs = {
    title: string
    publisher_id: number
    theme_id: number
    category_id: number
    domain_id: number
    price: number
    preview: string
    thumbnail: string
    chapters: PostChapterArgs[]
}
