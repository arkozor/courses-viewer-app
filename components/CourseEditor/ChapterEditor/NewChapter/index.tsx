import React from 'react'

import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { ChapterType, SubChapterType } from 'components/Course/types'

import NewSubChapter from '../NewSubChapter'
import classes from './style.module.scss'


type Props = {
    chapter: ChapterType
    getNewChapter: (chapter : ChapterType) => void
}

const NewChapter = ({chapter, getNewChapter: callbackNewChapter}: Props): JSX.Element => {

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

    const [subChapters, setSubChapters] = React.useState([])

    const [newSubChapter, setNewSubChapter] = React.useState([])

    const getNewSubChapter = (newSubChapter) => {
        setNewSubChapter(newSubChapter);
        subChapters[newSubChapter.number]=newSubChapter
    }

    // send sub chapters to parent page when new sub chapter is modified
    React.useEffect(() => {
        if (callbackNewChapter){
            callbackNewChapter(subChapters)
            console.log(chapters);
        }
    }, [newSubChapter])

    const handleChange = (event: any) => {
        const {value} = event.target
        setNewChapter({...newChapter, [event.target.name]: value})
        if (callbackNewChapter) {
            callbackNewChapter(newChapter)
        } 
    }

    console.log(newSubChapter)

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
            <div>{subChapters.map((subChapter: SubChapterType) => {
                return <div key={subChapter.id}>
                        <NewSubChapter subChapter={subChapter} getNewSubChapter={getNewSubChapter}/>
                    </div>
            })}</div>
            <Button onClick={() => {
                setSubChapters([...subChapters,
                     {
                        created_at: "",
                        course_id: subChapters.length,
                        deleted_at: null,
                        description: "string",
                        id: subChapters.length,
                        number: subChapters.length,
                        subchapters: [],
                        title: "string",
                        updated_at: "string",
                        thumbnail: "string",
                     }
                 ])
            }}>
                Add subchapter
            </Button>
            <div
                className={classes.chapterContent}
            ></div>
        </div>
    )
}

export default NewChapter