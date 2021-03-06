import React from 'react'

import Comment from '../Comment'
import { CommentType } from '../types'

type Props = {
    comments: CommentType[]
    getIsNewComment: (isNewComment: boolean) => void
}

const CourseComments = ({ comments, getIsNewComment }: Props): JSX.Element => {
    return (
        <>
            {comments
                ? comments.map((comment, i) => (
                      <Comment
                          comment={comment}
                          key={i}
                          getIsNewComment={getIsNewComment}
                      />
                  ))
                : null}
        </>
    )
}

export default CourseComments
