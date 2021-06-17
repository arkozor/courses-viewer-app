import React from 'react'

import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { ChapterType, SubChapterType } from 'components/Course/types'

import NewSubChapter from '../NewSubChapter'
import classes from './style.module.scss'


type Props = {
    chapter: ChapterType
    getNewChapter: (chapter : ChapterType) => void
}

const NewChapter = ({chapter, getNewChapter: getNewChapter}: Props): JSX.Element => {

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

    // get modified sub chapter object from a sub chapter component
    const getNewSubChapter = (newSubChapter: any) => {
        setNewSubChapter(newSubChapter);
        subChapters[newSubChapter.number]=newSubChapter
    }

    // send sub chapters to parent page when new sub chapter is modified
    React.useEffect(() => {
        if (getNewChapter){
            getNewChapter(newChapter)
            console.log(newChapter);
        }
    }, [newSubChapter])

    const handleChange = (event: any) => {
        const {value} = event.target
        setNewChapter({...newChapter, [event.target.name]: value})
        if (getNewChapter) {
            getNewChapter(newChapter)
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
                        chapter_id: subChapters.length,
                        created_at: "string",
                        deleted_at: null,
                        description: "string",
                        id: subChapters.length,
                        number: subChapters.length,
                        resources: [],
                        title: "string",
                        updated_at: "string",
                        video_location: "string"
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