import React from 'react'

import { Button, Typography } from '@material-ui/core'
import { ChapterType } from 'components/Course/types'

import classes from '../style.module.scss'
import NewChapter from './NewChapter'

type Props = {
    getChapters: (chaptersData: ChapterType[]) => void
}

const ChapterEditor = ({getChapters: getChapters}: Props): JSX.Element => {

    const [chapters, setChapters] = React.useState([])

    const [newChapter, setNewChapter] = React.useState([])


    const getNewChapter = (newChapter: any) => {
        setNewChapter(newChapter);
        chapters[newChapter.number]=newChapter
        
    }

    // send chapters to parent page when new chapter is modified
    React.useEffect(() => {
        if (getChapters){
            getChapters(chapters) 
            console.log(chapters);
        }
    }, [newChapter])

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