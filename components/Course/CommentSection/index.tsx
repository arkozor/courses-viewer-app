import React from 'react'

import AddComment from './AddComment'
import CommentNumber from './CommentNumber'
import CourseComments from './CourseComments'
import classes from './style.module.scss'
import { CommentType } from './types'

type Props = {
    comments: CommentType[]
}

const CommentSection = ({ comments }: Props): JSX.Element => {
    return (
        <div className={classes.container}>
            <CommentNumber comments={comments} />
            <AddComment />
            <CourseComments comments={comments} />
        </div>
    )
}

export default CommentSection
