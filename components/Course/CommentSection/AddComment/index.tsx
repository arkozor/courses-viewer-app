import React from 'react'
import { Button, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import classes from './style.module.scss'
import Avatar from 'components/Avatar'

type Props = {
    isAnswer?: boolean
    shouldCloseAnswer?: (shouldClose: boolean) => void
}
const AddComment = (props: Props): JSX.Element => {
    const { isAnswer, shouldCloseAnswer } = props
    const [comment, setComment] = React.useState('')
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    const isComment = comment?.length > 0
    const addComment = (commentBody: string) => {
        // eslint-disable-next-line no-console
        console.log(commentBody)
        //TODO: add comment in database
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
                        sizes={isAnswer ? 'sm' : 'md'}
                    />
                </div>
                <TextField
                    className={classes.input}
                    onChange={onInputChange}
                    placeholder="Ajouter un commentaire"
                    multiline
                    fullWidth
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    value={comment}
                    error={hasError}
                    helperText={
                        hasError
                            ? `${
                                  isAnswer ? 'La réponse' : 'Le commentaire'
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
                            if (isAnswer && shouldCloseAnswer) {
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
                                    setComment(null)
                                    if (isAnswer && shouldCloseAnswer) {
                                        shouldCloseAnswer(true)
                                    }
                                } catch (e) {
                                    setHasError(true)
                                }
                            }
                        }}
                        disabled={!isComment || hasError}
                        variant="contained"
                        color="primary"
                    >
                        {isAnswer ? 'Répondre' : ' Ajouter un commentaire'}
                        <SendIcon className={classes.sendIcon} />
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

export default AddComment
