import React from 'react'

import { Typography } from '@material-ui/core'

import { CommentType } from '../types'

type Props = {
    comments: CommentType[]
}

const CommentNumber = (props: Props): JSX.Element => {
    const { comments } = props
    const [totalComments, setTotalComments] = React.useState(0)
    const [totalReplies, setTotalReplies] = React.useState(0)

    React.useEffect(() => {
        const repliesLengths = comments.map((comment) => comment.replies.length)
        setTotalReplies(repliesLengths?.reduce((a, b) => a + b))
        setTotalComments(comments.length)
    }, [])

    return (
        <Typography variant="h6" component="span">
            {totalComments + totalReplies} Commentaires
        </Typography>
    )
}

export default CommentNumber
