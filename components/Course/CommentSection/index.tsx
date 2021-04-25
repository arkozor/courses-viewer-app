import React from 'react'
import AddComment from './AddComment'
import CommentNumber from './CommentNumber'
import CourseComments from './CourseComments'
import { CommentType } from './types'

import classes from './style.module.scss'

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
