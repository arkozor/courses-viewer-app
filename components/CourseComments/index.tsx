import { Input, Typography } from '@material-ui/core'
import Avatar from 'components/Avatar'
import React from 'react'
import classes from './style.module.scss'

const CourseComments = (): JSX.Element => {
    const commentList = [
        {
            author: 'James',
            body: '1er commentaire.',
            answers: [
                {
                    author: 'Johanna',
                    body: 'Félicitation.'
                }
            ]
        },
        {
            author: 'John',
            body: "Super cours, j'adore !"
        },
        {
            author: 'Jackie',
            body:
                'khoezihaojdazp hoazhoi azhoi zoiah ozahoi azhoidhaz oiihdoai hd oahzoiz hozahdoidh aoizhd oiiazhoidh zoiifh oiahfoi.'
        }
    ]

    return (
        <div className={classes.comments}>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <Typography variant="h4">
                        Un commentaire ? pose ta question ici !
                    </Typography>
                </div>
                <div className={classes.sectionBody}>
                    <Input className={classes.input}></Input>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <Typography variant="h4">
                        Questions des autres utilisateurs
                    </Typography>
                </div>
                <div className={classes.sectionBody}>
                    {commentList.map((comment, i) => (
                        <div className={classes.comment} key={i}>
                            <div className={classes.line}>
                                <div className={classes.author}>
                                    <Avatar></Avatar>
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
                                                <Avatar></Avatar>
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
