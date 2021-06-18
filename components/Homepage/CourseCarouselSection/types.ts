export type CoursePreview = {
    id: number
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
    category_id: number
    domain_id: number
    theme_id: number
    created_at: string
    updated_at: string
    title: string
    thumbnail: string
    description: string
    publisher_id: number
    preview: string
    price: number
    subscribed?: boolean
}
