import React from 'react'

import { Button, FormControl, TextField, Typography } from '@material-ui/core'
import { ChapterType } from 'components/Course/types'

import classes from '../style.module.scss'

const NewChapter = (props: {chapter: ChapterType}) => {
    const [newChapter, setNewChapter] = React.useState({
        course_id: props.chapter.course_id,
        created_at: "",
        deleted_at: null,
        description: "",
        id: props.chapter.id,
        number: props.chapter.number,
        subchapters: [],
        title: "",
        updated_at: "",
        thumbnail: "",
    })

    const handleChange = (event: any) => {
        const {value} = event.target
        setNewChapter({...newChapter, [event.target.name]: value})
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

const ChapterEditor = (): JSX.Element => {

    const [chapters, setChapters] = React.useState([])

    /* let existingStorage: string = localStorage.getItem('edit'); */

    /* useEffect(() => {
        existingStorage? existingStorage += window.localStorage.setItem('edit', JSON.stringify(state)): window.localStorage.setItem('edit', JSON.stringify(state))
    }, [state]) */

    

    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Chapters
            </Typography>

            <div>{chapters.map((chapter: ChapterType) => {
                return <div key={chapter.id}>
                        <NewChapter chapter={chapter}/>
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
                        number: 0,
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