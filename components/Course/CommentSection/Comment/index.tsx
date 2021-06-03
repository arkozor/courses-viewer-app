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
}

const Comment = (props: Props): JSX.Element => {
    const { comment } = props
    const [shouldDisplayAnswers, setShouldDisplayAnswers] = React.useState(
        false
    )
    const [isAnswering, setIsAnswering] = React.useState(false)

    const displayMoreText =
        comment.answers?.length === 1
            ? shouldDisplayAnswers
                ? `Masquer la réponse`
                : `Afficher la réponse`
            : shouldDisplayAnswers
            ? `Masquer les ${comment.answers?.length} réponses`
            : `Afficher les ${comment.answers?.length} réponses`

    return (
        <div className={classes.container}>
            <div className={classes.comment}>
                <div className={classes.authorContainer}>
                    <Avatar nickname={comment.author} withNickname />
                </div>
                <div className={classes.commentContainer}>
                    <Typography variant="body2">{comment.body}</Typography>
                </div>
            </div>
            <div className={classes.showMoreContainer}>
                <Button
                    size="small"
                    classes={{ root: classes.showMoreButton }}
                    onClick={() => {
                        setIsAnswering(true)
                    }}
                    variant="text"
                    color="primary"
                >
                    Répondre
                </Button>
                {isAnswering && (
                    <AddComment
                        isAnswer
                        shouldCloseAnswer={(isAnswering) => {
                            setIsAnswering(!isAnswering)
                        }}
                    />
                )}
            </div>
            {comment.answers && (
                <Button
                    size="small"
                    classes={{ root: classes.showMoreButton }}
                    onClick={() => {
                        setShouldDisplayAnswers(!shouldDisplayAnswers)
                    }}
                    variant="text"
                    color="primary"
                >
                    {shouldDisplayAnswers ? (
                        <ExpandLessIcon />
                    ) : (
                        <ExpandMoreIcon />
                    )}
                    {displayMoreText}
                </Button>
            )}
            {shouldDisplayAnswers
                ? comment.answers?.map((answer, i) => (
                      <div className={classes.answer} key={i}>
                          <div className={classes.authorContainer}>
                              <Avatar
                                  nickname={answer.author}
                                  withNickname
                                  sizes="sm"
                              />
                          </div>
                          <div className={classes.answerContainer}>
                              <Typography variant="body2">
                                  {answer?.body}
                              </Typography>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    )
}

export default Comment
