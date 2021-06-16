import React from 'react'

import { Button, Typography } from '@material-ui/core'
import { ChapterType } from 'components/Course/types'

import classes from '../style.module.scss'
import NewChapter from './NewChapter'

type Props = {
    getData: (chaptersData: ChapterType[]) => void
}

const ChapterEditor = ({getData: callback}: Props): JSX.Element => {

    const [chapters, setChapters] = React.useState([])

    const [newChapter, setNewChapter] = React.useState([])

    const getNewChapter = (newChapter) => {
        setNewChapter(newChapter);
        chapters[newChapter.number]=newChapter
    }

    React.useEffect(() => {
        if (callback){
            callback(chapters)
        }
    }, [chapters])

    
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