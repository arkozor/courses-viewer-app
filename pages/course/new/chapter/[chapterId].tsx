import React from 'react'

import ChapterEditor from 'components/CourseCreator/ChapterEditor'
import SubChapterEditor from 'components/CourseCreator/SubChapterEditor'
import { useRouter } from 'next/router'

const ChapterEditorPage = (): JSX.Element => {
    const router = useRouter()
    const { chapterId } = router.query

    // const chapterIndex = chapterId - 1

    // const localStorageCourse =
    //     typeof window !== 'undefined' && localStorage.getItem('course')

    // const parsedLocalStorageCourse: PostCourseArgs = JSON.parse(
    //     localStorageCourse
    // )

    // const parsedLocalStorageChapters = JSON.parse(localStorageCourse)?.chapters

    // const parsedLocalStorageCurrentChapter: PostChapterArgs =
    //     parsedLocalStorageCourse?.chapters &&
    //     parsedLocalStorageCourse?.chapters[chapterIndex]

    return (
        <div>
            <ChapterEditor
                chapterId={Number(chapterId)}
                // localStorageTarget={parsedLocalStorageChapters}
            />
            <SubChapterEditor chapterId={Number(chapterId)} />
        </div>
    )
}

export default ChapterEditorPage
