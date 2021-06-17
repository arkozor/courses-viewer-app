import React from 'react'

import { Button, Typography } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Avatar from 'components/Avatar'

import AddComment from '../AddComment'
import { CommentType } from '../types'
import classes from './style.module.scss'

type Props = {
    comment: CommentType
    getIsNewComment: (isNewComment: boolean) => void
}

const Comment = (props: Props): JSX.Element => {
    const { comment, getIsNewComment } = props

    const [shouldDisplayReplies, setShouldDisplayReplies] = React.useState(
        false
    )

    const [isReplying, setIsReplying] = React.useState(false)

    const displayMoreText =
        comment.replies?.length === 1
            ? shouldDisplayReplies
                ? `Masquer la réponse`
                : `Afficher la réponse`
            : shouldDisplayReplies
            ? `Masquer les ${comment.replies?.length} réponses`
            : `Afficher les ${comment.replies?.length} réponses`

    return (
        <div className={classes.container}>
            <div className={classes.comment}>
                <div className={classes.authorContainer}>
                    <Avatar nickname={comment.user.nickname} withNickname />
                </div>
                <div className={classes.commentContainer}>
                    <Typography variant="body2">{comment.content}</Typography>
                </div>
            </div>
            <div className={classes.showMoreContainer}>
                <Button
                    size="small"
                    classes={{ root: classes.showMoreButton }}
                    onClick={() => {
                        setIsReplying(true)
                    }}
                    variant="text"
                    color="primary"
                >
                    Répondre
                </Button>

                {isReplying && (
                    <AddComment
                        commentId={comment.id}
                        shouldCloseAnswer={(isReplying) => {
                            setIsReplying(!isReplying)
                        }}
                        author={comment.user.nickname}
                        getIsNewComment={getIsNewComment}
                    />
                )}
            </div>
            {comment.replies.length ? (
                <Button
                    size="small"
                    classes={{ root: classes.showMoreButton }}
                    onClick={() => {
                        setShouldDisplayReplies(!shouldDisplayReplies)
                    }}
                    variant="text"
                    color="primary"
                >
                    {shouldDisplayReplies ? (
                        <ExpandLessIcon />
                    ) : (
                        <ExpandMoreIcon />
                    )}
                    {displayMoreText}
                </Button>
            ) : null}
            {shouldDisplayReplies
                ? comment.replies?.map((reply, i) => (
                      <div className={classes.answer} key={i}>
                          <div className={classes.authorContainer}>
                              <Avatar
                                  nickname={reply.user.nickname}
                                  src={reply.user.avatar}
                                  withNickname
                                  sizes="sm"
                              />
                          </div>
                          <div className={classes.answerContainer}>
                              <Typography variant="body2">
                                  {reply.content}
                              </Typography>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    )
}

export default Comment
