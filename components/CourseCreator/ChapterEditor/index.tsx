import React from 'react'

import { Typography, TextField } from '@material-ui/core'

import { PostChapterArgs, PostCourseArgs } from '../type'

type Props = {
    chapterId: number
    target: PostChapterArgs[]
    course: PostCourseArgs
}

const ChapterEditor = ({ chapterId, target, course }: Props): JSX.Element => {
    const chapterIndex = chapterId - 1

    const [
        parsedLocalStorageCurrentChapter,
        setParsedLocalStorageCurrentChapter
    ] = React.useState<PostChapterArgs>()

    React.useEffect(() => {
        setParsedLocalStorageCurrentChapter(target[chapterIndex])
    }, [chapterId])

    const [updatedChapters, setUpdatedChapters] = React.useState(target)

    const onChangeDescription = (event) => {
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
                ...course,
                chapters: updatedChapters
            })
        )
    }, [updatedChapters])

    return (
        <div>
            <Typography variant="h3">
                {parsedLocalStorageCurrentChapter?.title}
            </Typography>
            <TextField
                defaultValue={updatedChapters[chapterIndex].description}
                placeholder="Description du chapitre"
                onBlur={onChangeDescription}
                multiline
                variant="outlined"
            />
        </div>
    )
}

export default ChapterEditor
