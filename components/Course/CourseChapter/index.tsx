import React from 'react'

import { ChapterType } from '../types'
import Chapter from './Chapter'
import classes from './style.module.scss'

type Props = {
    chapters: ChapterType[]
    isPreview: boolean
}
const CourseChapter = (props: Props): JSX.Element => {
    const { chapters, isPreview } = props

    return (
        <div className={classes.container}>
            {chapters &&
                chapters.map((chapter) => (
                    <Chapter
                        key={chapter.id}
                        chapter={chapter}
                        isPreview={isPreview}
                    />
                ))}
        </div>
    )
}

export default CourseChapter
