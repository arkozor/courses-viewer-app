import React from 'react'
import { Typography } from '@material-ui/core'
import { CommentType } from '../types'

type Props = {
    comments: CommentType[]
}

const CommentNumber = (props: Props): JSX.Element => {
    const { comments } = props
    const [totalComments, setTotalComments] = React.useState(comments.length)

    let totalAnswerLength = 0

    React.useEffect(() => {
        comments.forEach((comment) => {
            if (comment.answers?.length) {
                totalAnswerLength += comment.answers?.length
            }
        })
        setTotalComments(totalComments + totalAnswerLength)
    }, [])

    return (
        <Typography variant="h6" component="span">
            {totalComments} Commentaires
        </Typography>
    )
}

export default CommentNumber
