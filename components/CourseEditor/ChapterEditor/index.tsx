import React from 'react'

import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { ChapterType } from 'components/Course/types'

import classes from '../style.module.scss'

type NewChapterProps = {
    chapter: ChapterType
    getNewChapter: (chapter : ChapterType) => void
}

type ChapterEditorProps = {
    callback: (chaptersData: ChapterType[]) => void
}

const NewChapter = ({chapter, getNewChapter}: NewChapterProps) => {
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

    console.log("title: " + newChapter.title);
    console.log("description: " + newChapter.description);

    return (
        <div>
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
        </div>
    )
}

const ChapterEditor = ({callback}: ChapterEditorProps): JSX.Element => {

    const [chapters, setChapters] = React.useState([])

    const [newChapter, setNewChapter] = React.useState([])

    const getNewChapter = (newChapter) => {
        setNewChapter(newChapter);
        chapters[newChapter.number]=newChapter
        console.log(newChapter);
    }

    React.useEffect(() => {
        if (callback){
            callback(chapters)
        }
    }, [chapters])

    console.log(newChapter);
    
    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Chapters
            </Typography>

            <div>{chapters.map((chapter: ChapterType) => {
                return <div key={chapter.id}>
                        <NewChapter chapter={chapter} getNewChapter={getNewChapter}/>
                    </div>
            })}</div>

            <Button onClick={() => {
                setChapters([...chapters,
                    {
                        course_id: chapters.length,
                        created_at: "",
                        deleted_at: null,
                        description: "string",
                        id: chapters.length,
                        number: chapters.length,
                        subchapters: [],
                        title: "string",
                        updated_at: "string",
                        thumbnail: "string",
                    }
                ])
            }}>
                Add chapter
            </Button>
        </div>
    )
}

export default ChapterEditor