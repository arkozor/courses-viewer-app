import { Button, TextField, Typography } from '@material-ui/core'
import Avatar from 'components/Avatar'
import React from 'react'
import classes from './style.module.scss'

type Comment = {
    author: string
    body: string
    answers?: {
        author: string
        body: string
    }[]
}

type Props = {
    comments: Comment[]
}

const CourseComments = (props: Props): JSX.Element => {
    const [comment, setComment] = React.useState(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { comments } = props

    const addComment = (commentBody: string) => {
        // eslint-disable-next-line no-console
        console.log(commentBody)
        //TODO: add comment in database
    }

    function onInputChange(event: any): any {
        setComment(event.target.value)
    }

    return (
        <div className={classes.comments}>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <Typography variant="h4">
                        Un commentaire ? pose ta question ici !
                    </Typography>
                </div>
                <div className={classes.sectionBody}>
                    <TextField
                        className={classes.input}
                        onChange={onInputChange}
                        error={comment?.length < 6}
                        helperText={
                            comment?.length < 5
                                ? 'Enter at least 5 characters'
                                : ''
                        }
                    />
                    <Button
                        className={classes.button}
                        onClick={() => {
                            if (comment?.length > 4) {
                                addComment(comment)
                            }
                        }}
                        disabled={comment?.length < 5}
                    >
                        Envoyer
                    </Button>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <Typography variant="h4">
                        Questions des autres utilisateurs
                    </Typography>
                </div>
                <div className={classes.sectionBody}>
                    {comments.map((comment, i) => (
                        <div className={classes.comment} key={i}>
                            <div className={classes.line}>
                                <div className={classes.author}>
                                    <div className={classes.avatar}>
                                        <Avatar nickname={comment.author} />
                                    </div>
                                    <Typography variant="h5">
                                        {comment.author}
                                    </Typography>
                                </div>
                                <div className={classes.lineContent}>
                                    <Typography variant="body1">
                                        {comment.body}
                                    </Typography>
                                </div>
                            </div>
                            <div className={classes.anwers}>
                                {comment.answers?.map((answers, i) => (
                                    <div className={classes.answers} key={i}>
                                        <div className={classes.line}>
                                            <div className={classes.author}>
                                                <div className={classes.avatar}>
                                                    <Avatar
                                                        nickname={
                                                            answers.author
                                                        }
                                                    />
                                                </div>
                                                <Typography variant="h5">
                                                    {answers.author}
                                                </Typography>
                                            </div>
                                            <div
                                                className={classes.lineContent}
                                            >
                                                <Typography variant="body1">
                                                    {answers?.body}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseComments
