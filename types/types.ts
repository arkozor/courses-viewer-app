import { ChapterType } from "components/Course/types"

export type User = {
    id: string
    username: string
    firstname: string
    lastname: string
    avatarSrc?: string
} | null

export type CourseEditor = {
    title: string
    category: string
    chapters: ChapterType[]
}