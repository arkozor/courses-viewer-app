import React from 'react'

import { Typography, TextField, Button } from '@material-ui/core'
import { useRouter } from 'next/router'

import { PostChapterArgs, PostCourseArgs } from '../type'
import classes from './style.module.scss'

const ChaptersStep = (): JSX.Element => {
    const router = useRouter()

    const localStorageCourse =
        typeof window !== 'undefined' && localStorage.getItem('course')

    const parsedLocalStorageCourse: PostCourseArgs = JSON.parse(
        localStorageCourse
    )

    const [chapters, setChapters] = React.useState<PostChapterArgs[]>(
        parsedLocalStorageCourse?.chapters || []
    )

    const onChangeChapterTitle = (event, index) => {
        setChapters(
            chapters.map((chapter) =>
                chapter.number === index + 1
                    ? { ...chapter, title: event.target.value }
                    : chapter
            )
        )
    }

    const goToChapter = (chapterNumber: number) => {
        router.push({
            pathname: 'new/chapter',
            query: {
                id: chapterNumber
            }
        })
    }

    React.useEffect(() => {
        localStorage.setItem(
            'course',
            JSON.stringify({
                ...parsedLocalStorageCourse,
                chapters: chapters
            })
        )
    }, [chapters])

    return (
        <div className={classes.container}>
            <Typography variant="h3" gutterBottom>
                Chapitres
            </Typography>
            <Typography color="primary" variant="subtitle1" gutterBottom>
                Résumez en quelques mots le contenu de votre chapitre.
            </Typography>
            <div className={classes.chaptersList}>
                {chapters.map((chapter, index) => (
                    <div
                        className={classes.chapter}
                        key={`chapter-${index + 1}`}
                    >
                        <TextField
                            onChange={(e) => onChangeChapterTitle(e, index)}
                            value={chapter.title}
                            variant="outlined"
                            placeholder={`Chapitre ${index + 1}`}
                            InputProps={{
                                classes: { root: classes.endAdornment },
                                endAdornment: chapter.title ? (
                                    <Button
                                        classes={{
                                            root: classes.goToChapterButton
                                        }}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => goToChapter(index + 1)}
                                    >
                                        Accéder au contenu
                                    </Button>
                                ) : null
                            }}
                            fullWidth
                        />
                    </div>
                ))}
            </div>
            <Button
                onClick={() => {
                    setChapters((oldArray) => [
                        ...oldArray,
                        {
                            number: chapters.length + 1,
                            title: '',
                            description: '',
                            subchapters: []
                        }
                    ])
                }}
            >
                Ajouter un Chapitre
            </Button>
            {chapters.length > 1 ? (
                <Button
                    onClick={() => {
                        setChapters((oldArray) =>
                            oldArray.slice(0, oldArray.length - 1)
                        )
                    }}
                >
                    Supprimer un Chapitre
                </Button>
            ) : null}
        </div>
    )
}

export default ChaptersStep
