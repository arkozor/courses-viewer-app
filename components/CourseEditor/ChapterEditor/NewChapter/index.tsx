import React from 'react'

import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { ChapterType } from 'components/Course/types'

import classes from './style.module.scss'


type Props = {
    chapter: ChapterType
    getNewChapter: (chapter : ChapterType) => void
}

const NewChapter = ({chapter, getNewChapter}: Props) => {

    const [newChapter, setNewChapter] = React.useState({
        course_id: chapter.course_id,
        created_at: "",
        deleted_at: null,
        description: "",
        id: chapter.id,
        number: chapter.number,
        subchapters: [],
        title: "",
        updated_at: "",
        thumbnail: "",
    })

    const handleChange = (event: any) => {
        const {value} = event.target
        setNewChapter({...newChapter, [event.target.name]: value})
        if (getNewChapter) {
            getNewChapter(newChapter)
        } 
    }

    return (
        <div className={classes.chapter}>
            <Typography
                variant="h2"
            >
                {"Chapter " + newChapter.number}
            </Typography>
            <FormControl 
                variant="outlined"
                className={classes.formControl}
            >
                <TextField
                    variant="outlined"
                    className={classes.input}
                    name="title"
                    onChange={handleChange}
                    label="Title"
                ></TextField>
            </FormControl>
            <FormControl 
                variant="outlined"
                className={classes.formControl}
            >
                <TextField
                    variant="outlined"
                    className={classes.input}
                    name="description"
                    onChange={handleChange}
                    label="Description"
                ></TextField>
            </FormControl>
            <Button onClick={() => {
                // setSubChapters([...subChapters,
                //     {
                //         course_id: subChapters.length,
                //         created_at: "",
                //         deleted_at: null,
                //         description: "string",
                //         id: subChapters.length,
                //         number: subChapters.length,
                //         subchapters: [],
                //         title: "string",
                //         updated_at: "string",
                //         thumbnail: "string",
                //     }
                // ])
            }}>
                Add chapter
            </Button>
            <div
                className={classes.chapterContent}
            ></div>
        </div>
    )
}

export default NewChapter