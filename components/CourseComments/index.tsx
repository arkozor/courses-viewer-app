import { Input } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const CourseComments = (props: { comments: any[] }): JSX.Element => {

    let commentList = [
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
            author: "Johanna",
            body: "",
        },
        {
            author: "Jackie",
            body: "khoezihaojdazp hoazhoi azhoi zoiah ozahoi azhoidhaz oiihdoai hd oahzoiz hozahdoidh aoizhd oiiazhoidh zoiifh oiahfoi."
        },
    ]
    
    return (
        <div className={classes.comments}>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <h2>Un commentaire, pose ta question ici !</h2>
                </div>
                <div className={classes.sectionBody}>
                    <Input className={classes.input}></Input>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.sectionTitle}>
                    <h2>Questions des autres utilisateurs</h2>
                </div>
                <div className={classes.sectionBody}>
                    {commentList.map( comment => (
                        <div>
                            <div className={classes.comment}>
                                <h2>{comment.author}</h2>
                                <p>{comment.body}</p>
                                <div className={classes.anwers}>
                                    {comment.answers?.map( answers => (
                                        <div>
                                            <div className={classes.answers}>
                                                <h3>{answers.author}</h3>
                                                <p>{answers?.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseComments
