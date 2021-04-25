import React from 'react'
import { ChapterType } from '../types'
import Chapter from './Chapter'

import classes from './style.module.scss'

type Props = {
    chapters: ChapterType[]
}
const CourseChapter = (props: Props): JSX.Element => {
    const { chapters } = props

    return (
        <div className={classes.container}>
            {chapters &&
                chapters.map((chapter) => (
                    <Chapter key={chapter.id} chapter={chapter} />
                ))}
        </div>
    )
}

export default CourseChapter
