import React from 'react'

import AddComment from './AddComment'
import CommentNumber from './CommentNumber'
import CourseComments from './CourseComments'
import classes from './style.module.scss'
import { CommentType } from './types'

type Props = {
    comments: CommentType[]
    getIsNewComment: (isNewComment: boolean) => void
}

const CommentSection = ({ comments, getIsNewComment }: Props): JSX.Element => {
    return (
        <div className={classes.container}>
            <CommentNumber comments={comments} />
            <AddComment getIsNewComment={getIsNewComment} />
            <CourseComments
                comments={comments}
                getIsNewComment={getIsNewComment}
            />
        </div>
    )
}

export default CommentSection
