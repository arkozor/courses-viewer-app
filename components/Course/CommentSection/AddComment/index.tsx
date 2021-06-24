import React from 'react'

import { Button, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import axios from 'axios'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

type Props = {
    getIsNewComment: (isNewComment: boolean) => void
    commentId?: number
    author?: string
    shouldCloseAnswer?: (shouldClose: boolean) => void
}

const AddComment = (props: Props): JSX.Element => {
    const router = useRouter()
    const { commentId, shouldCloseAnswer, author, getIsNewComment } = props
    const { id } = router.query

    const currentUser = React.useContext(UserContext)
    const [comment, setComment] = React.useState('')
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    const isComment = comment?.length > 0

    const addComment = (commentBody: string) => {
        try {
            axios.post(
                `${process.env.COMMENT_API}`,
                {
                    comment_id: commentId,
                    user_id: currentUser.id,
                    content: commentBody,
                    course_id: id
                },
                {
                    headers: { Authorization: `Bearer ${currentUser.token}` },
                    timeout: 60000
                }
            )
            getIsNewComment(true)
        } catch (e) {
            setHasError(true)
            throw new Error('Comment failed to be posted')
        }
    }

    function onInputChange(event: any): any {
        setComment(event.target.value)
    }

    React.useEffect(() => {
        if (hasError) {
            setTimeout(() => {
                setHasError(false)
            }, 3000)
        }
    }, [hasError])

    return (
        <div className={classes.container}>
            <div className={classes.textfieldContainer}>
                <div className={classes.avatarContainer}>
                    <Avatar
                        nickname="Utilisateur"
                        sizes={commentId ? 'sm' : 'md'}
                    />
                </div>
                <TextField
                    className={classes.input}
                    onChange={onInputChange}
                    label={
                        commentId
                            ? `Répondre à ${author}`
                            : 'Ajouter un commentaire'
                    }
                    multiline
                    fullWidth
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    autoFocus={!!commentId}
                    value={comment}
                    error={hasError}
                    helperText={
                        hasError
                            ? `${
                                  commentId ? 'La réponse' : 'Le commentaire'
                              } n'a pas pu être envoyé`
                            : null
                    }
                />
            </div>
            {isFocused ? (
                <div className={classes.buttonsContainer}>
                    <Button
                        className={classes.cancelButton}
                        onClick={() => {
                            setIsFocused(false)
                            setComment('')
                            setHasError(false)
                            if (!!commentId && shouldCloseAnswer) {
                                shouldCloseAnswer(true)
                            }
                        }}
                        variant="contained"
                    >
                        Annuler
                    </Button>
                    <Button
                        onClick={() => {
                            if (isComment && !hasError) {
                                try {
                                    addComment(comment)
                                    setIsFocused(false)
                                    if (!!commentId && shouldCloseAnswer) {
                                        shouldCloseAnswer(true)
                                    }
                                    setComment('')
                                } catch (e) {
                                    setHasError(true)
                                }
                            }
                        }}
                        disabled={!isComment || hasError}
                        variant="contained"
                        color="primary"
                        classes={{ root: classes.reply }}
                    >
                        {commentId ? 'Répondre' : ' Ajouter un commentaire'}
                        <SendIcon className={classes.sendIcon} />
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

export default AddComment
