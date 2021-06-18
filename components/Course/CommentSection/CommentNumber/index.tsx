import React from 'react'

import { Typography } from '@material-ui/core'

import { CommentType } from '../types'

type Props = {
    comments: CommentType[] | []
}

const CommentNumber = ({ comments }: Props): JSX.Element => {
    const [totalComments, setTotalComments] = React.useState(0)
    const [totalReplies, setTotalReplies] = React.useState(0)

    React.useEffect(() => {
        if (comments.length) {
            const replies = comments.map((comment) => comment.replies.length)
            if (replies.length) {
                setTotalReplies(replies?.reduce((a, b) => a + b))
            }
            setTotalComments(comments.length || 0)
        }
    }, [comments])
    const commentsAndRepliesNumber = totalComments + totalReplies
    return (
        <Typography variant="h6" component="span">
            {`${commentsAndRepliesNumber} ${
                commentsAndRepliesNumber > 1 ? 'Commentaires' : 'Commentaire'
            } `}
        </Typography>
    )
}

export default CommentNumber
