export type CourseType = {
    id: number
    created_at: string
    updated_at: string
    deleted_at: string | null
    title: string
    thumbnail: string
    preview: string
    price: number
    chapters: ChapterType[]
    publisher_id: number
    verified: number
    category_id: number
    domain_id: number
    theme_id: number
    category: {
        id: number
        name: string
    }
    domain: {
        id: number
        name: string
    }
    theme: {
        id: number
        name: string
    }
}

export type ResourceType = {
    created_at: string
    deleted_at: string | null
    id: number
    resource_location: string
    sub_chapter_id: number
    title: string
    updated_at: string
}
export type SubChapterType = {
    chapter_id: number
    created_at: string
    deleted_at: null
    description: string
    id: number
    number: number
    resources: ResourceType[]
    title: string
    updated_at: string
    video_location: string
}
export type ChapterType = {
    course_id: number
    created_at: string
    deleted_at: string | null
    description: string
    id: number
    number: number
    subchapters: SubChapterType[]
    title: string
    updated_at: string
    thumbnail: string
}
