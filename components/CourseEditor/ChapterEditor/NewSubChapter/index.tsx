import React from 'react'

import { FormControl, TextField, Typography } from '@material-ui/core'
import { SubChapterType } from 'components/Course/types'

import classes from './style.module.scss'


type Props = {
    subChapter: SubChapterType
    getNewSubChapter: (subChapter : SubChapterType) => void
}

const NewSubChapter = ({subChapter, getNewSubChapter}: Props): JSX.Element => {
    const [newSubChapter, setNewSubChapter] = React.useState({
        chapter_id: subChapter.chapter_id,
        created_at: "string",
        deleted_at: null,
        description: "string",
        id: subChapter.id,
        number: subChapter.number,
        resources: [],
        title: "string",
        updated_at: "string",
        video_location: "string"
    })

    const handleChange = (event: any) => {
        const {value} = event.target
        setNewSubChapter({...newSubChapter, [event.target.name]: value})
        if (getNewSubChapter) {
            getNewSubChapter(newSubChapter)
        } 
    }

    return (
        <div className={classes.subChapter}>
            <Typography
                variant="h5"
            >
                {"Sub Chapter " + newSubChapter.number}
            </Typography>
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
            <div
                className={classes.chapterContent}
            ></div>
        </div>
    )
}

export default NewSubChapter