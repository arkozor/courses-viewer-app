import React from 'react'

import Comment from '../Comment'
import { CommentType } from '../types'

type Props = {
    comments: CommentType[]
}

const CourseComments = ({ comments }: Props): JSX.Element => {
    return (
        <>
            {comments.map((comment, i) => (
                <Comment comment={comment} key={i} />
            ))}
        </>
    )
}

export default CourseComments
