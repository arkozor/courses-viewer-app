import { Button, TextField, Typography } from '@material-ui/core'
import Avatar from 'components/Avatar'
import React from 'react'
import classes from './style.module.scss'

const CourseComments = (props: { comments: any[] }): JSX.Element => {

    const [newComment, setNewComment] = React.useState('')
    let commentList = props.comments

    // Fake data
    commentList = [
        {
            author: "James",
            body: "1er commentaire.",
            answers: [
                {
                    author: "Johanna",
                    body: "Félicitation."
                },
            ]
        },
        {
            author: "John",
            body: "Super cours, j'adore !",
        },
        {
            author: "Jackie",
            body: "khoezihaojdazp hoazhoi azhoi zoiah ozahoi azhoidhaz oiihdoai hd oahzoiz hozahdoidh aoizhd oiiazhoidh zoiifh oiahfoi."
        },
    ]
    
    function addComment(commentBody: any): any{
        if (commentBody.length>4) {

            //TODO: add comment in database
        }
    }

    function onInputChange(event: any): any {
        setNewComment(event.target.value);
    }

    return (
        <div className={classes.comments}>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <Typography variant="h4">Un commentaire ? pose ta question ici !</Typography>
                </div>
                <div className={classes.sectionBody}>
                <TextField
                    className={classes.input}
                    onChange={onInputChange}
                    error={newComment.length>0 && newComment.length<6}
                    helperText={newComment.length>0 && newComment.length<5?"Enter at least 5 characters":""}
                    />
                <Button 
                    className={classes.button} 
                    onClick={() => {addComment(newComment)}}
                    disabled={newComment.length<5}
                    >
                        Submit
                    </Button>
            </div>
            </div>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <Typography variant="h4">Questions des autres utilisateurs</Typography>
                </div>
                <div className={classes.sectionBody}>
                    {commentList.map( (comment,i) => (
                        <div className={classes.comment} key={i}>
                            <div className={classes.line}>
                                <div className={classes.author}>
                                    <div className={classes.avatar}>
                                        <Avatar nickname={comment.author}></Avatar>
                                    </div>
                                    <Typography variant="h5">{comment.author}</Typography>
                                </div>
                                <div className={classes.lineContent}>
                                    <Typography variant="body1">{comment.body}</Typography>
                                </div>
                            </div>
                            <div className={classes.anwers}>
                                {comment.answers?.map( (answers,i) => (
                                    <div className={classes.answers} key={i}>
                                        <div className={classes.line}>
                                            <div className={classes.author}>
                                                <div className={classes.avatar}>
                                                    <Avatar nickname={answers.author}></Avatar>
                                                </div>
                                                <Typography variant="h5">{answers.author}</Typography>
                                            </div>  
                                            <div className={classes.lineContent}>
                                                <Typography variant="body1">{answers?.body}</Typography>
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
