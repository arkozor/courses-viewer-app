import React from 'react'

import { Typography, TextareaAutosize } from '@material-ui/core'

import { PostChapterArgs, PostCourseArgs } from '../type'

type Props = {
    chapterId: number
}

const ChapterEditor = ({
    chapterId
}: // localStorageTarget
Props): JSX.Element => {
    const chapterIndex = chapterId - 1

    const localStorageCourse =
        typeof window !== 'undefined' && localStorage.getItem('course')

    const parsedLocalStorageCourse: PostCourseArgs = JSON.parse(
        localStorageCourse
    )

    const parsedLocalStorageChapters = JSON.parse(localStorageCourse)?.chapters

    const parsedLocalStorageCurrentChapter: PostChapterArgs =
        parsedLocalStorageCourse?.chapters &&
        parsedLocalStorageCourse?.chapters[chapterIndex]

    const [description, setDescription] = React.useState(
        parsedLocalStorageCurrentChapter?.description || ''
    )

    React.useEffect(() => {
        setDescription(parsedLocalStorageCurrentChapter?.description)
    }, [chapterId])

    const [updatedChapters, setUpdatedChapters] = React.useState(
        parsedLocalStorageChapters
    )
    const onChangeDescription = (event) => {
        setDescription(event.target.value)
        setUpdatedChapters(
            updatedChapters.map((chapter) =>
                chapter?.number === chapterId
                    ? { ...chapter, description: event.target.value }
                    : chapter
            )
        )
    }

    React.useEffect(() => {
        localStorage.setItem(
            'course',
            JSON.stringify({
                ...parsedLocalStorageCourse,
                chapters: updatedChapters
            })
        )
    }, [description])

    return (
        <div>
            <Typography variant="h3">
                {parsedLocalStorageCurrentChapter?.title}
            </Typography>
            <TextareaAutosize
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Minimum 3 rows"
                onChange={onChangeDescription}
                value={description}
            />
            description: {description}
        </div>
    )
}

export default ChapterEditor
